import './reset.css';
import './style.css';

import { CreateTodo } from './createTodo.js';

const newTodo1 = new CreateTodo(
  'Hacer yoga',
  'Hoy hay que hacer yoga jeje',
  'hoy',
  'high'
);

console.log(newTodo1.format());
