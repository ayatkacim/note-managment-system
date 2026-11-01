
import { User } from "./user";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: User;

  constructor(
    id: number,
    title: string,
    content: string,
    userId: User
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  public preview(): string {
    return this.content.slice(0, 30);
  }
}
