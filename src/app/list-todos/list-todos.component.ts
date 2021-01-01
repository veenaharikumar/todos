import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description: 'Learn' },
    { id: 2, description: 'Run' },
    { id: 3, description: 'Complete Course' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
