import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { NoteDetailsComponent } from './notes/note-details.component';
import { NotesListComponent } from './notes/notes-list.component';
import { CreateNoteComponent } from './notes/create-note.component';
import { NotesFilterComponent } from './notes/notes-filter.component';
import { NotesService } from './notes/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NotesListComponent,
    CreateNoteComponent,
    NotesFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
