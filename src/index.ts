import { User } from "./models/user";
import { Admin } from "./models/admin";
import { Note } from "./models/note";
import { NoteBook } from "./models/noteBook";
import { Storage } from "./models/storage";

console.log("===== NOTES MANAGEMENT SYSTEM =====");

const user1 = new User(
  1,
  "Ahmed",
  "ahmed@gmail.com",
  "123456",
  "01012345678",
  22,
);

console.log("\n===== USER INFORMATION =====");
user1.displayInfo();

const admin1 = new Admin(
  2,
  "Omar",
  "omar@gmail.com",
  "admin123",
  "01112345678",
  30,
);

console.log("\n===== ADMIN INFORMATION =====");
admin1.displayInfo();
admin1.manageNotes();

// 3. Note - Association
const note1 = new Note(
  101,
  "TypeScript Basics",
  "TypeScript adds static typing to JavaScript.",
  user1,
);

console.log("\n===== NOTE ASSOCIATION =====");
console.log("Title:", note1.title);
console.log("Preview:", note1.preview());
console.log("Author:", note1.userId.name);

// 4. NoteBook - Composition
const notebook1 = new NoteBook(1, "Programming");

notebook1.addNote(
  201,
  "JavaScript",
  "JavaScript is a programming language.",
  user1,
);

notebook1.addNote(202, "Node.js", "Node.js is a JavaScript runtime.", user1);

console.log("\n===== NOTEBOOK NOTES =====");

notebook1.getNotes().forEach((note) => {
  console.log(`${note.id} - ${note.title}`);
});

notebook1.removeNote(201);

// 5. Aggregation - User and Notebook
const notebook2 = new NoteBook(2, "University");

user1.addNotebook(notebook1);
user1.addNotebook(notebook2);

console.log("\n===== USER NOTEBOOKS =====");

user1.getNotebooks().forEach((notebook) => {
  console.log(`${notebook.id} - ${notebook.title}`);
});

user1.removeNotebook(2);

console.log("Independent Notebook:", notebook2.title);

// 6. Generics
const noteStorage = new Storage<Note>();

noteStorage.addItem(note1);

console.log("\n===== GENERIC STORAGE =====");

noteStorage.getAllItems().forEach((note) => {
  console.log(`${note.id} - ${note.title}`);
});

const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);

console.log("Numbers:", numberStorage.getAllItems());

console.log("\n===== SYSTEM TEST COMPLETED =====");
