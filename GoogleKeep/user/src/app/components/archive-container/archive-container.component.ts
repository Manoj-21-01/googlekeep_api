// archive.component.ts
import { Component, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note-services/note.service';
import { ViewModeService } from 'src/app/services/view-mode-services/view-mode-services.service';

interface NoteObj {
  title: string;
  description: string;
  color: string;
  id: string;
  isArchived: boolean;
  isDeleted: boolean;
}


@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.css']
})
export class ArchiveContainerComponent implements OnInit{
  viewMode: boolean = true;
  archivedNotes: NoteObj[]= [];
  filteredArchivedNotes: NoteObj[]= [];

  constructor(public noteService: NoteService, public viewModeService: ViewModeService) {
    this.getArchivedNotes();
    this.viewModeService.viewMode$.subscribe(mode => this.viewMode = mode);
   }
  ngOnInit(): void {
    this.getArchivedNotes();
  }

  getArchivedNotes(): void {
    this.noteService.getArchivedNotesCall().subscribe(
      (result: any)=>{
        this.archivedNotes=result.data.data;
        this.archivedNotes=this.archivedNotes.filter(notes => notes.isArchived && !notes.isDeleted);
       console.log(this.archivedNotes);
      },
      error => {
        console.error('Error fetching archived notes:', error);
      }
    );
  }
  updateArchiveList($event: NoteObj){
    this.archivedNotes = this.archivedNotes.filter((noteObj)=>{
      return noteObj.id!= $event.id;
    })
  }

}
