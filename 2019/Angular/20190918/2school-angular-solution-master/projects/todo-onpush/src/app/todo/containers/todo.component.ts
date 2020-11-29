import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { cloneArray, TodoItem } from '../../shared';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    public todos: TodoItem[];
    private orig: TodoItem[];

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

    public ngOnInit() {
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
        this.todos.push(newItem);
        this.snackBar.open('add item', null, { duration: 1500 });
    }

    public onAddClone(newItem: TodoItem): void {
        const todos = cloneArray(this.todos);
        todos.push(newItem);
        this.todos = todos;
        this.snackBar.open('add item', null, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = cloneArray(this.orig);
        this.snackBar.open('reset todos', null, { duration: 1500 });
    }
}
