import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-create-project-progress',
  templateUrl: './create-project-progress.component.html',
  styleUrls: ['./create-project-progress.component.css']
})
export class CreateProjectProgressComponent implements OnInit {
  progressStatus = document.getElementById('progressStatus');
  @Input() progressValue: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
