import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../../models/workspace.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() task: Task;

  constructor() {}

  ngOnInit() {
  }

}
