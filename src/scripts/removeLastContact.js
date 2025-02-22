import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) return console.error('No contacts');

  contacts.pop();
  await writeContacts(contacts);

  return contacts;
};

removeLastContact();
