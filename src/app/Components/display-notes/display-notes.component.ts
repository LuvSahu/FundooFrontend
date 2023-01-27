import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from 'src/app/update/update.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  note:any;

  @Input() messages: any;

  @Output() refresh = new EventEmitter<string>();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data:note,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog closed',response);
      // this.note=response
      
    });
    
  }

  receiveTrashMessage($event : any) {
    console.log($event)
    
  }
  

}
