import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaEnvelope, FaUserShield } from 'react-icons/fa';
import { adminService, authService } from '../services/api';
import Button from '../components/Button';

export const Login = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const data = await authService.login(credentials);
      localStorage.setItem('adminToken', data.token);
      onLoginSuccess(data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-3xl border-white/10 w-full max-w-md space-y-6"
      >
        <div className="text-center space-y-2">
          <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl mx-auto mb-4">
            <FaUserShield />
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground">Admin Login</h2>
          <p className="text-gray-400">Access the message management dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
            <input
              type="text"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <Button type="submit" variant="primary" className="w-full py-4" disabled={status === 'sending'}>
            {status === 'sending' ? 'Logging in...' : 'Enter Dashboard'}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const data = await adminService.getMessages();
      setMessages(data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await adminService.deleteMessage(id);
      setMessages(messages.filter(m => m._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete message');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-xl">
              <FaEnvelope />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={() => { authService.logout(); window.location.reload(); }}>
            Logout
          </Button>
        </div>

        {error && <p className="text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20">{error}</p>}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {messages.length === 0 ? (
              <div className="glass p-12 rounded-3xl border-white/10 text-center space-y-4">
                <p className="text-gray-400 text-lg">No messages received yet.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <motion.div
                  key={msg._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-6 rounded-2xl border-white/10 flex flex-col md:flex-row justify-between gap-6"
                >
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-foreground">{msg.name}</span>
                      <span className="text-sm text-gray-500">• {msg.email}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{msg.message}</p>
                    <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      onClick={() => handleDelete(msg._id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
