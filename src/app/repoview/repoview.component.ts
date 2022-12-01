import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

import { RepoAssignments } from "../repoassignments";
import { RepoAssignmentStruc } from "../repoassignment";

@Component({
  selector: 'app-repoview',
  templateUrl: './repoview.component.html',
  styleUrls: ['./repoview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepoviewComponent implements OnInit {

  // selectedRepo!: RepoAssignmentStruc;
  repoassignments = RepoAssignments;
  tabRepo = '';

  @Input() user = '';

  constructor() { }

  ngOnInit(): void {
  }


  onSelectedTab(event: any){
    // console.log(event.tab.textLabel);
    this.tabRepo = event.tab.textLabel;
  }

}
