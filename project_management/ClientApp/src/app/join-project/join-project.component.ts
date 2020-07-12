import { Component, OnInit } from '@angular/core';
import { PROJECT_TASKS } from '../model/mock-projects';

@Component({
  selector: 'app-join-project',
  templateUrl: './join-project.component.html',
  styleUrls: ['./join-project.component.css']
})
export class JoinProjectComponent implements OnInit {
  projects = PROJECT_TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
