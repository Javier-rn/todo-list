class CreateTodo {
  constructor(title, description, dueDate, priority, folder) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.folder = folder;
  }

  format() {
    console.log(`Title: ${this.title}. Description: ${this.description}`);
  }
}

export { CreateTodo };
