import { Component, Input, Output } from '@angular/core';
import { Note } from './note.model';
import { NotesFilterParams } from './notes-filter-params.model';
import { Priority } from './notes-filter-priority.model';

@Component({
  selector: 'app-notes-filter',
  templateUrl: './notes-filter.component.html'
})
export class NotesFilterComponent {
  @Input() notes = [] as Note[];
  // @Output() notesFiltered = [] as Note[]; TODO: check if doesnt have to fire event

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

  togglePriority(priority: Priority) {
    let priorities = this.filterBy.priorities;
    priority.active = !priority.active;

    // TODO: use lodash
    // if (priorities.includes(priority.value)) {
    //   priorities.remove(priority.value);
    // }
    // else {
    //   priorities.push(priority.value);
    // }
  }
}
