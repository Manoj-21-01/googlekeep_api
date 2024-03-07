import { Component, Input } from '@angular/core';
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
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.css']
})
export class TrashContainerComponent {
  @Input() viewMode: boolean = true;
  trashNotes: NoteObj[] = [];
  constructor(public noteService: NoteService, public viewModeService: ViewModeService) { 
    this.getDeletedNotes();
    this.viewModeService.viewMode$.subscribe(mode => this.viewMode = mode);
  }
  getDeletedNotes(): void {
    this.noteService.getTrashNotesCall().subscribe(
      (result: any)=>{
        this.trashNotes=result.data.data;
       console.log(this.trashNotes);},
      error => {
        console.error('Error fetching deleted notes:', error);
      }
    );
  }
}
