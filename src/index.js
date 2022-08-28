import './reset.css';
import './style.css';

import { addFolder } from './addFolder';
import { CreateTodo } from './createTodo.js';
import { addFoldersEvents, addNewTodo } from './eventHandlers.js';

addFolder();
addFoldersEvents();

addNewTodo('Hacer Yoga', 'HOy hay que hacer yogaaa', 'Hoy', 'Alta');
