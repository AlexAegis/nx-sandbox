import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromRoot from './root.reducers';
import { Todo } from '../../models/todo.interface';
import { todoActions } from '../actions';
export const todoFeatureKey = 'todo';

export interface TodoState extends EntityState<Todo> {
	loading: boolean;
}

export interface State extends fromRoot.State {
	[todoFeatureKey]: TodoState;
}

export const adapter = createEntityAdapter<Todo>({ selectId: (todo) => todo.name });

const intitalState: TodoState = adapter.getInitialState({
	loading: false,
});

export const reducer = createReducer(
	intitalState,
	on(todoActions.createTodo, (state, { payload }) => adapter.upsertOne(payload, { ...state }))
);
