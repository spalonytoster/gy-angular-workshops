import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
  @Input() notes = [] as Note[];
  @Output() selectedItem = new EventEmitter<Note>();
  @Output() deletedItem = new EventEmitter<Note>();

  selectedNote: Note;

  ngOnInit() {
    this.selectedNote = this.notes[0];
  }

  selectItem(note: Note) {
    this.selectedNote = note;
    this.selectedItem.emit(note);
  }

  deleteItem(note: Note) {
    /*
      if we're deleting the note that is currently selected,
      we're going to set the first available note on the list
     */
    if (this.notes.length > 1 && this.selectedNote === note) {
      if (this.selectedNote === this.notes[0]) {
        this.selectItem(this.notes[1]);
      }
      else {
        this.selectItem(this.notes[0]);
      }
    }
    this.deletedItem.emit(note);
  }
}
