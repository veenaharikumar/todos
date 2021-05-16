import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string
  todos: Todo[]
  // [
  //   new Todo(1, 'Learn', false, new Date()),
  //   new Todo(2, 'Run', false, new Date()),
  //   new Todo(3, 'Complete Course', false, new Date())
  // ]

  constructor(private todoservice: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    console.log("get todos")
    this.todoservice.retrieveAllTodos("veenah").subscribe(

      response => {
        this.todos = response;
      }

    );
  }

  deleteTodo(id) {
    this.todoservice.deleteTodo("veenah", id).subscribe(
      response => {
        console.log(response)
        this.message = 'Record deleted'
        this.getTodos();
      }
    )

  }

  updateTodo(id) {
    this.router.navigate(['todos', id])
  }


}
