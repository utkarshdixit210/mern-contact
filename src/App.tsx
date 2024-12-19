import React, { useState, useEffect } from 'react';
import { Contact } from './types/Contact';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import { getContacts, saveContacts } from './utils/storage';
import { Users } from 'lucide-react';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setContacts(getContacts());
  }, []);

  const addContact = (newContact: Omit<Contact, 'id'>) => {
    const contact: Contact = {
      ...newContact,
      id: crypto.randomUUID(),
    };
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  const deleteContact = (id: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
            <Users size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Manager</h1>
          <p className="text-gray-600 mt-2">Keep track of your contacts in one place</p>
        </div>

        <ContactForm onSubmit={addContact} />
        
        <div className="space-y-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
      </div>
    </div>
  );
}

export default App;