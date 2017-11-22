import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Task } from '../../../models/workspace.interface';

import { KANBAN_API } from '../../../../app.api';
import { ErrorHandler } from '../../../app.error-handler';

@Injectable()
export class CardService {

  constructor(private http: Http) {}

    allTasks(): Observable<Task[]> {
      return this.http.get(`${KANBAN_API}/tasks`).
      map(response => response.json())
      .catch(ErrorHandler.handleError);
    }

    taskById(id: string): Observable<Task[]> {
      return this.http.get(`${KANBAN_API}/tasks/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }

}
