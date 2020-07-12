import { Component, OnInit } from '@angular/core';
import { PROJECT_TASKS } from '../model/mock-projects';

@Component({
  selector: 'app-create-project-tasks',
  templateUrl: './create-project-tasks.component.html',
  styleUrls: ['./create-project-tasks.component.css']
})
export class CreateProjectTasksComponent implements OnInit {
  tasks = PROJECT_TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
