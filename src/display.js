function displayTodo(todo) {
  const span = document.createElement('span');
  const input = document.createElement('input');
  const title = document.createElement('p');
  const description = document.createElement('p');
  const due = document.createElement('p');
  const priority = document.createElement('p');

  span.classList.add('remove');
  span.textContent = 'x';

  input.type = 'checkbox';

  title.textContent = todo.title;
  description.textContent = todo.description;
  due.textContent = todo.due;
  priority.textContent = todo.priority;

  const div = document.createElement('div');
  div.classList.add('row');

  div.append(span);
  div.append(input);
  div.append(title);
  div.append(description);
  div.append(due);
  div.append(priority);

  const allTodos = document.querySelector('.todos-content');
  allTodos.append(div);
}

export { displayTodo };
