import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices/noteservices.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notelist : any;
  // notes=[];
  constructor(private note: NoteservicesService){}

  ngOnInit(): void {
    this.getNotes()
}

getNotes(){
  this.note.getAllNotes().subscribe((response : any) =>
  {
    console.log("archive response=", response);
    this.notelist= response.data
      console.log(this.notelist);
      this.notelist.reverse();
      this.notelist = this.notelist.filter((notesdata: any) =>{
         return notesdata.archive == true;
  })

})
}

}
