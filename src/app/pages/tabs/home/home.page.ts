import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  tasks: Task[] = [
    {
      id: '1',
      title: 'Google Authentication',
      description: 'Create a function that allows to authenticate the user with Google',
      items: [
        { name: 'Activity 1', completed: true },
        { name: 'Activity 2', completed: false },
        { name: 'Activity 3', completed: false },

      ]
    },
    {
      id: '2',
      title: 'Google Authentication',
      description: 'Create a function that allows to authenticate the user with Google',
      items: [
        { name: 'Activity 1', completed: true },
        { name: 'Activity 2', completed: false },
        { name: 'Activity 3', completed: false },

      ]
    },
    {
      id: '3',
      title: 'Google Authentication',
      description: 'Create a function that allows to authenticate the user with Google',
      items: [
        { name: 'Activity 1', completed: true },
        { name: 'Activity 2', completed: false },
        { name: 'Activity 3', completed: false },

      ]
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
