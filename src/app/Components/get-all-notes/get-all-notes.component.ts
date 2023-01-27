import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices/noteservices.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  notes=[]
  constructor(private note : NoteservicesService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.note.getAllNotes().subscribe((response : any) =>
    {
      console.log(response);
      this.notes= response.data
      console.log(this.notes);
      this.notes.reverse();
      this.notes = this.notes.filter((notesdata: any) =>{
         return notesdata.trash == false && notesdata.archive == false;
      })
    })

  }

  receiveNotesMessage($event:any){
       this.getNotes();
  }

}

