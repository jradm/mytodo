import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'todomvc-app-css/index.css';
import {provideStore, combineReducers} from '@ngrx/store';

import {todos, visibility, initialTodo, initialVisibility} from './app/reducers/todos';

import './index.css';

import {App} from './app/containers/App';
import {enableProdMode} from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(App, [
  provideStore(combineReducers({todos, visibility}), {todos: [initialTodo], visibility: initialVisibility})
]);
