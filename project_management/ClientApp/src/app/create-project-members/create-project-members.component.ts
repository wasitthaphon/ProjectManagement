import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../model/mock-members';

@Component({
  selector: 'app-create-project-members',
  templateUrl: './create-project-members.component.html',
  styleUrls: ['./create-project-members.component.css']
})
export class CreateProjectMembersComponent implements OnInit {
  members = MEMBERS;
  constructor() { }

  ngOnInit(): void {
  }

}
