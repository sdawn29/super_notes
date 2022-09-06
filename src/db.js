import Dexie from "dexie";

export const db = new Dexie("superNotesDB");
db.version(1).stores({
  notes: "++id, title, description, labels", // Primary key and indexed props
});
