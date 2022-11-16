import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion } from "@angular/material/expansion";

import { Comments } from '../comments';
import { COMMENTS } from '../mock-comments'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  isHidden = true;

  comments = COMMENTS;

  currentrepo = 'zulip/zulip';

  ngOnInit(): void {
  }

  toggleComments(){
    this.isHidden = !this.isHidden;
  }

  // displayedColumns: string[] = ['id', 'status', 'created', 'user', 'body', 'link'];
  // dataSource!: MatTableDataSource<Comments>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatAccordion) accordion!: MatAccordion;


}
