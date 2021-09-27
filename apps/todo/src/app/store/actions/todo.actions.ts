import { createAction, props } from '@ngrx/store';
import { Payload } from '../../models';
import { Todo } from '../../models/todo.interface';

export const createTodo = createAction('[Todo] Create Todo', props<Payload<Todo>>());
export const announceTodo = createAction('[Todo] Announce Todo', props<Payload<Todo>>());
