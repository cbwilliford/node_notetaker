import fs from 'node:fs/promises'
const DB_PATH = new URL('../db.json', import.meta.url).pathname;

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, 'UTF-8');
  return JSON.parse(db);
}

export const saveDB = async DB => {
  await fs.writeFile(DB_PATH, JSON.stringify(DB, null, 2));
  return DB;
}

export const insertDB = async note => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
}
