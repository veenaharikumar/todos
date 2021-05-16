import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(name) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
  }

  deleteTodo(name, id) {
    return this.http.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

}
