const express = require('express');
const router = express.Router();
const { createContact, getContacts, deleteContact } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validationMiddleware');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', validateContact, createContact);

router.get('/', protect, authorize('admin'), getContacts);
router.delete('/:id', protect, authorize('admin'), deleteContact);

module.exports = router;
