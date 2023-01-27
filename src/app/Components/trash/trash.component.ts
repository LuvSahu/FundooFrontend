import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices/noteservices.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent  implements OnInit {

  notelist : any;
  // notes=[];
  check = [];

  constructor(private note: NoteservicesService){}

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes(){
    this.note.getAllNotes().subscribe((response : any) =>
    {
      console.log("trash response=", response);
      this.notelist= response.data
      console.log(this.notelist);
      this.notelist.reverse();
      this.check = this.notelist.filter((notesdata: any) =>{
        return notesdata.trash === true;
      })
      console.log(this.check)
    })
}

}

