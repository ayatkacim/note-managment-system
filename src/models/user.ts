import type { NoteBook } from "./noteBook";

export class User {
  private notebooks: NoteBook[] = [];
  public id: number;
  public name: string;
  public email: string;
  private password: string;
  public phone: string;
  private age: number;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  public displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Age: ${this.age}`);
  }

  public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);

    console.log(`Notebook "${notebook.title}" added to ${this.name}`);
  }

  public removeNotebook(notebookId: number): void {
    const index = this.notebooks.findIndex(
      (notebook) => notebook.id === notebookId,
    );

    if (index === -1) {
      console.log("Notebook not found!");
      return;
    }

    this.notebooks.splice(index, 1);

    console.log("Notebook removed from user.");
  }

  public getNotebooks(): readonly NoteBook[] {
    return [...this.notebooks];
  }
}
