import { filter } from 'rxjs/operators/filter';

import { Component, OnInit, Input } from '@angular/core';

import { CardService } from './card.service';

import { Task } from '../../../models/workspace.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  tasks: Task[];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.allTasks().subscribe(tasks => this.tasks = tasks);
  }

}
