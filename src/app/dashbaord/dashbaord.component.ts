import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Comments } from '../comments';
import { COMMENTS } from '../mock-comments'


@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})

export class DashbaordComponent implements OnInit {

  isHidden = true;

  comments = COMMENTS;

  constructor() { }

  ngOnInit(): void {
  }

  toggleComments(){
    this.isHidden = !this.isHidden;
  }

  displayedColumns: string[] = ['id', 'status', 'created', 'user', 'body', 'link'];
  dataSource!: MatTableDataSource<Comments>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

}
