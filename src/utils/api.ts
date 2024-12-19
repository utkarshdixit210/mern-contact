// Use environment variables for API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchContacts = async () => {
  const response = await fetch(`${API_URL}/contacts`);
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return response.json();
};

export const createContact = async (contact: Omit<Contact, 'id'>) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  if (!response.ok) {
    throw new Error('Failed to create contact');
  }
  return response.json();
};

export const updateContact = async (id: string, contact: Omit<Contact, 'id'>) => {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  if (!response.ok) {
    throw new Error('Failed to update contact');
  }
  return response.json();
};

export const deleteContact = async (id: string) => {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }
  return response.json();
};