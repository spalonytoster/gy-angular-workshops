import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';
import { NotesViewState } from './notes-view-state.model';
import * as moment from 'moment';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})
export class CreateNoteComponent {
  @Input() noteToEdit = {} as Note;
  @Input() mode = undefined as NotesViewState;
  @Output() editedItem = new EventEmitter<Note>();
  @Output() createdItem = new EventEmitter<Note>();
  @Output() onBack = new EventEmitter();

  dueDate: string = '';
  newNote = {} as Note;

  ngOnInit() {
    if (this.mode === NotesViewState.edit) {
      this.newNote = this.noteToEdit;
      this.dueDate = moment(this.newNote.dueDate).format("YYYY-MM-DDThh:mm");
    }
  }

  onCancel() {
    this.onBack.emit();
  }

  onSubmit() {
    if (this.mode === NotesViewState.create) {
      this.createNote();
    }
    else if (this.mode === NotesViewState.edit) {
      this.editNote();
    }
  }

  createNote() {
    console.log(this.dueDate);
    this.newNote.createdOn = new Date();
    this.newNote.dueDate = new Date(this.dueDate);
    this.newNote.priority = 1;
    this.createdItem.emit(this.newNote);
    this.newNote = {} as Note;
  }

  editNote() {
    console.log('note edited');
  }

  isCreateMode() {
    return this.mode === NotesViewState.create;
  }
}
