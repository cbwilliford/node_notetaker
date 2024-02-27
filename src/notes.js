import {
  insertDB,
  saveDB,
  getDB,
} from './db.js';

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  }
  await insertDB(newNote);
  return newNote;
}

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
}

export const findNotes = async query => {
  const { notes } = await getDB();
  return notes.filter(note => note.content.toLowerCase().includes(query.toLowerCase()))
}

export const removeNote = async id => {
  const { notes } = await getDB();
  const note = notes.find(note => note.id === id);
  if (note) {
    const newNotes = notes.filter(note => note.id !== id);
    await saveDB({ notes: newNotes });
    return `Note ${id} deleted`
  }
  return `No note with ID ${id}`
}

export const removeAll = () => saveDB({notes: []});

