class CreateTodo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  format() {
    console.log(`Title: ${this.title}. Description: ${this.description}`);
  }
}

export { CreateTodo };
