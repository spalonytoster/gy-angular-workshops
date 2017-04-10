import { Component, OnInit } from '@angular/core';
import { Note } from './notes/note.model';
import { NotesService } from './notes/notes.service';
import { NotesViewState } from './notes/notes-view-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  originalNotes: Note[];
  selectedNote: Note;
  viewState = NotesViewState.display;

  notesViewStateRef = NotesViewState;
  filteringEnabled: boolean = false;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.get();
    this.originalNotes = this.notes.slice();
    this.selectedNote = this.notes[0];
  }

  onSelectedItem(note: Note) {
    this.selectedNote = note;
    this.viewState = NotesViewState.display;
  }

  onCreatedItem(note: Note) {
    this.notesService.push(note);
    this.viewState = NotesViewState.display;
  }

  onEditedItem(note: Note) {
    // TODO
  }

  onDeletedItem(deleted: Note) {
    this.notesService.remove(deleted._id);
    this.notes = this.notesService.get();
  }

  onEditItem(note: Note) {
    this.viewState = NotesViewState.edit;
    this.selectedNote = note;
  }

  createNote() {
    this.viewState = NotesViewState.create;
  }

  onBack() {
    this.viewState = NotesViewState.display;
  }

  toggleFiltering() {
    this.filteringEnabled = !this.filteringEnabled;
    if (!this.filteringEnabled) {
        this.notes = this.originalNotes;
    }
  }

  onFilter(filteredNotes) {
    this.notes = filteredNotes;
  }
}
