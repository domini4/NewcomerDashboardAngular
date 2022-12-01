import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion } from "@angular/material/expansion";

import { RepoAssignmentStruc } from "../repoassignment";

@Component({
  selector: 'app-commentview',
  templateUrl: './commentview.component.html',
  styleUrls: ['./commentview.component.css']
})
export class CommentviewComponent implements OnInit {

  // @Input() repo?: RepoAssignmentStruc;
  @Input() repo = '';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;

}
