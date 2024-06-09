import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    for (let i = contacts.length - 1; i >= 0; i--) {
      if (Math.random() < 0.5) {
        console.log(`Deleting contact: ${contacts[i].name}`);
        contacts.splice(i, 1);
      }
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('Finished');
  } catch (err) {
    console.error('Error', err);
  }
};

await thanos();
