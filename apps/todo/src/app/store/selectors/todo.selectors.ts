import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromTodo } from '../reducers';

export const selectTodoState = createFeatureSelector<fromTodo.TodoState>(fromTodo.todoFeatureKey);

const entitySelectors = fromTodo.adapter.getSelectors();

export const selectAllTodos = createSelector(selectTodoState, entitySelectors.selectAll);
export const selectTotalTodos = createSelector(selectTodoState, entitySelectors.selectTotal);
