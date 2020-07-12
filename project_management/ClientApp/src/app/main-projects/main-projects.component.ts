import { Component, OnInit } from '@angular/core';
import { PROJECT_TASKS } from '../model/mock-projects';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.css']
})
export class MainProjectsComponent implements OnInit {
  projects = PROJECT_TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
