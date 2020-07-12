import { Component, OnInit } from '@angular/core';

import { PROJECT_TASKS } from '../model/mock-projects';

@Component({
  selector: 'app-main-tasks',
  templateUrl: './main-tasks.component.html',
  styleUrls: ['./main-tasks.component.css']
})
export class MainTasksComponent implements OnInit {
  tasks = PROJECT_TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
