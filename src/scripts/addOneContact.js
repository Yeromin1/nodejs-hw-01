import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    await writeContacts([newContact]);
    return newContact;
  } catch (error) {
    console.log('error: ', error.message);
  }
};

addOneContact();
