import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';
import { NotesFilterParams } from './notes-filter-params.model';
import { Priority } from './notes-filter-priority.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-notes-filter',
  templateUrl: './notes-filter.component.html'
})
export class NotesFilterComponent {
  @Input() notes = [] as Note[];
  @Output() onFilter = new EventEmitter<Note[]>();

  priorities: Priority[] = [] as Priority[];
  filterBy: NotesFilterParams = {} as NotesFilterParams;

  constructor() {
    this.filterBy.title = '';
    this.filterBy.priorities = [];
    this.filterBy.dueDateRange = { start: undefined, end: undefined };

    for (let i = 1; i <= 5; i++) {
      this.priorities.push({
        value: i,
        active: false
      } as Priority);
    }
  }

  togglePriorityAndFilter(priority: Priority) {
    let priorities = this.filterBy.priorities;
    priority.active = !priority.active;

    if (priorities.includes(priority.value)) {
      _.remove(priorities, (p) => p === priority.value);
    }
    else {
      priorities.push(priority.value);
    }
    this.filter();
  }

  filter() {
    let filteredNotes = this.notes;

    if (this.filterBy.title !== '') {
      filteredNotes = filteredNotes.filter((note) => note.title.toLowerCase().includes(this.filterBy.title.toLowerCase()));
    }
    if (this.filterBy.priorities.length > 0) {
      filteredNotes = filteredNotes.filter((note) => _.includes(this.filterBy.priorities, note.priority));
    }

    let dueDateRange = { start: undefined, end: undefined };
    if (this.filterBy.dueDateRange.start) {
      dueDateRange.start = new Date(this.filterBy.dueDateRange.start);

      // start of the day
      dueDateRange.start.setHours(0);
      dueDateRange.start.setMinutes(0);
      dueDateRange.start.setSeconds(0);
      filteredNotes = filteredNotes.filter((note) => note.dueDate >= dueDateRange.start);
    }
    if (this.filterBy.dueDateRange.end) {
      dueDateRange.end = new Date(this.filterBy.dueDateRange.end);

      // end of the day
      dueDateRange.end.setHours(23);
      dueDateRange.end.setMinutes(59);
      dueDateRange.end.setSeconds(59);
      filteredNotes = filteredNotes.filter((note) => note.dueDate <= dueDateRange.end);
    }

    this.onFilter.emit(filteredNotes);
  }
}
