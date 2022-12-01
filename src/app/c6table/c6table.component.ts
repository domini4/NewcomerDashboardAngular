import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";


import { GetcommentsService } from '../getcomments.service';
import { Comments } from "../comments";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-c6table',
  templateUrl: './c6table.component.html',
  styleUrls: ['./c6table.component.css']
})
export class C6tableComponent implements OnChanges {

  // class input from dashbaord
  @Input() repo = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  thumbsUp = faThumbsUp;
  thumbsDown = faThumbsDown;

  selection = new SelectionModel<Comments>(true, []);

  respV = 'unselected';


  data:any;
  dataset:any;

  players = []

  players1 = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5"
  ]

  players2 = [
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10"
  ]

  constructor(private getcommentsapi:GetcommentsService) { }


  ngOnChanges(changes: SimpleChanges) {
    this.getcommentsapi.getRepoComments(this.repo, 6).subscribe(data=>{
      this.data = data;
      this.dataset = new MatTableDataSource(this.data.Items);
      this.dataset.paginator = this.paginator;
      this.dataset.sort = this.sort;
      })
    }

  sortColumn(sort: Sort) {
    if(sort.direction){
      this.dataset.sort = this.sort;
    }
  }

  getRecord(resp){
    if(resp=='like'){
      this.players = this.players1;
    }
    else if(resp=='dislike'){
      this.players = this.players2;
    }
    this.getcommentsapi.getRepoComments(this.repo, 6).subscribe(data=>{
      this.data = data;
      this.dataset = new MatTableDataSource(this.data.Items);
      this.dataset.paginator = this.paginator;
      this.dataset.sort = this.sort;
      })
  }

  getClickResp(iconClick){
    console.log(iconClick);
  }

  displayedColumns: string[] = ['select', 'status', 'created_at', 'user', 'body', 'link', 'like', 'dislike', 'feedback'];

}
