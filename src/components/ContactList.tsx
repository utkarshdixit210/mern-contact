import React from 'react';
import { Contact } from '../types/Contact';
import { Trash2, Mail, Phone } from 'lucide-react';

interface ContactListProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
}

export default function ContactList({ contacts, onDelete }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-md">
        <p className="text-gray-500">No contacts yet. Add your first contact above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between gap-4"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{contact.name}</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                {contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
                {contact.phone}
              </a>
            </div>
          </div>
          <button
            onClick={() => onDelete(contact.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Delete contact"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}