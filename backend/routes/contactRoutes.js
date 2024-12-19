import express from 'express';
import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';
import { validateContact } from '../middleware/validateContact.js';

const router = express.Router();

router.route('/')
  .get(getContacts)
  .post(validateContact, createContact);

router.route('/:id')
  .get(getContact)
  .put(validateContact, updateContact)
  .delete(deleteContact);

export default router;