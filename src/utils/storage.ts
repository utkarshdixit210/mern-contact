import { Contact } from '../types/Contact';

const STORAGE_KEY = 'contacts';

export const getContacts = (): Contact[] => {
  const contacts = localStorage.getItem(STORAGE_KEY);
  return contacts ? JSON.parse(contacts) : [];
};

export const saveContacts = (contacts: Contact[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};