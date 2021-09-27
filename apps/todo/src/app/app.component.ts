import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-sandbox/api-interfaces';
import { TodoStoreFacade } from './store/todo-store.facade';

@Component({
	selector: 'nx-sandbox-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	hello$ = this.http.get<Message>('/api/hello');
	todos$ = this.todoStoreFacade.todos$;
	todoCount$ = this.todoStoreFacade.todoCount$;
	i = 0;
	constructor(private http: HttpClient, private readonly todoStoreFacade: TodoStoreFacade) {}

	createTestTodo(): void {
		this.todoStoreFacade.createTodo({ content: 'Test', name: `Test ${this.i}` });
		this.i++;
	}
}
