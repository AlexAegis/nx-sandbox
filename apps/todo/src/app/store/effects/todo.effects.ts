import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { todoActions } from '../actions';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoEffects {
	constructor(private readonly actions$: Actions) {}

	announceTodo$ = createEffect(() =>
		this.actions$.pipe(
			ofType(todoActions.createTodo),
			map(({ payload }) => todoActions.announceTodo({ payload }))
		)
	);
}
