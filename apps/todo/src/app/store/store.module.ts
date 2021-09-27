import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoStoreModule } from './todo-store.module';
import { fromRoot } from './reducers';

@NgModule({
	imports: [
		StoreModule.forRoot(fromRoot.reducers, {
			metaReducers: fromRoot.metaReducers,
			runtimeChecks: {
				strictActionImmutability: true,
				strictActionSerializability: true,
				strictActionTypeUniqueness: true,
				strictActionWithinNgZone: true,
				strictStateImmutability: true,
				strictStateSerializability: true,
			},
		}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			name: 'Todo App',
			maxAge: 50,
		}),
		TodoStoreModule,
	],
})
export class RootStoreModule {}
