import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Todo, toPayload } from '../models';
import { todoActions } from './actions';
import { todoSelectors } from './selectors';
import { TodoStoreModule } from './todo-store.module';

@Injectable({ providedIn: TodoStoreModule })
export class TodoStoreFacade {
	todos$ = this.store.pipe(select(todoSelectors.selectAllTodos));
	todoCount$ = this.store.pipe(select(todoSelectors.selectTotalTodos));

	constructor(private readonly store: Store, private readonly actions$: Actions) {}

	createTodo(todo: Todo) {
		this.store.dispatch(todoActions.createTodo(toPayload(todo)));
	}
}
