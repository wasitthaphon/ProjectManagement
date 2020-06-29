import { Component, OnInit } from '@angular/core';
import { PROJECT_TASKS } from '../model/mock-projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  projectTasks = PROJECT_TASKS;

  constructor() {
    this.username = 'Me';
  }

  ngOnInit(): void {
  }

}
