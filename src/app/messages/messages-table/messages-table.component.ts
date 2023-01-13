import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FirebaseMessageService } from 'src/app/Services/firebase-message.service';
import { loadMessages } from '../store/action/message.actions';
import { MessageState } from '../store/reducer/message.reducer';
import { selectMessages } from '../store/selector/message.selectors';

@Component({
  selector: 'app-messages-table',
  templateUrl: './messages-table.component.html',
  styleUrls: ['./messages-table.component.scss']
})



export class MessagesTableComponent implements OnInit, AfterViewInit{
  IsWait=false
  displayedColumns = ['id', 'name', 'date', 'message'];
  dataSource:any=new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort | any;

  Messages$!: Observable<any[]>
  data:any;
  constructor(public msgService:FirebaseMessageService,
  private cdrf:ChangeDetectorRef,
  private _snackBar: MatSnackBar,
  private store: Store<MessageState>,
  private _liveAnnouncer: LiveAnnouncer
  ){}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.Messages$ = this.store.select(selectMessages);
    this.store.dispatch(loadMessages())
    this.IsWait=true
    this.Messages$.subscribe((res)=>{
      if(res){
        this.openSnackBar("Records Fetch Successfully !!")
        this.IsWait=false
        this.dataSource= new MatTableDataSource(res)
        this.dataSource.sort = this.sort;
      }

    },(error)=>{
      this.IsWait=false
      this.openSnackBar("Http failure response")
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  openSnackBar(message:string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }



}
