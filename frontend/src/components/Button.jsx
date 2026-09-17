import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  icon,
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-glow border border-primary/40',
    emerald: 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-glow-emerald border border-emerald-500/40',
    outline: 'border border-white/15 bg-white/[0.02] text-foreground hover:bg-white/[0.08] hover:border-white/30 backdrop-blur-sm',
    ghost: 'text-muted hover:text-foreground hover:bg-white/5',
    glass: 'bg-white/5 border border-white/10 text-foreground hover:border-primary/50 hover:bg-primary/10 backdrop-blur-md',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-mono',
    md: 'px-5 py-2.5 text-sm font-medium',
    lg: 'px-7 py-3.5 text-base font-medium',
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/50 ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.291z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        <>
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
