
import { Note } from "./note";
import { User } from "./user";

export class NoteBook {
  public id: number;
  public title: string;

  private notes: Note[] = [];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  public addNote(
    id: number,
    title: string,
    content: string,
    author: User
  ): void {
    const note = new Note(id, title, content, author);

    this.notes.push(note);

    console.log(`Note "${title}" added successfully.`);
  }

  public removeNote(noteId: number): void {
    const index = this.notes.findIndex(
      (note) => note.id === noteId
    );

    if (index === -1) {
      console.log("Note not found!");
      return;
    }

    this.notes.splice(index, 1);

    console.log("Note removed successfully.");
  }

  public getNotes(): readonly Note[] {
    return [...this.notes];
  }
}
