import { Component, OnInit } from '@angular/core';

import { SECTIONS } from '../model/section-list';

@Component({
  selector: 'app-create-project-head',
  templateUrl: './create-project-head.component.html',
  styleUrls: ['./create-project-head.component.css']
})
export class CreateProjectHeadComponent implements OnInit {
  sections = SECTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
