import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './effects/todo.effects';
import { fromTodo } from './reducers';

@NgModule({
	imports: [
		StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
		EffectsModule.forFeature([TodoEffects]),
	],
})
export class TodoStoreModule {}
