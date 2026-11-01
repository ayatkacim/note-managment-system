export class Storage<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
    console.log("Item added successfully.");
  }

  public removeItem(item: T): void {
    const index = this.items.indexOf(item);

    if (index === -1) {
      console.log("Item not found!");
      return;
    }

    this.items.splice(index, 1);
    console.log("Item removed successfully.");
  }

  public getAllItems(): T[] {
    return [...this.items];
  }
}
