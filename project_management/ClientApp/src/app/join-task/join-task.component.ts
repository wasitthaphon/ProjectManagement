import { Component, OnInit } from '@angular/core';
import { PROJECT_TASKS } from '../model/mock-projects';

@Component({
  selector: 'app-join-task',
  templateUrl: './join-task.component.html',
  styleUrls: ['./join-task.component.css']
})
export class JoinTaskComponent implements OnInit {
  tasks = PROJECT_TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
