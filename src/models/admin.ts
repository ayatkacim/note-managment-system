
import { User } from "./user";

export class Admin extends User {

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    super(id, name, email, password, phone, age);
  }

  public manageNotes(): void {
    console.log(`${this.name} is managing notes.`);
  }
}
