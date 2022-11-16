import { Component, OnInit, Input } from '@angular/core';

import { GetcommentsService } from '../getcomments.service';

@Component({
  selector: 'app-c3table',
  templateUrl: './c3table.component.html',
  styleUrls: ['./c3table.component.css']
})
export class C3tableComponent implements OnInit {

  // class input from dashbaord
  @Input() repo = 'zulip/zulip';

  data:any = []
  constructor(private getcommentsapi:GetcommentsService) {
    this.getcommentsapi.getRepoComments(this.repo).subscribe(data=>{
      console.log("repo : ", this.repo)
      // console.log(JSON.stringify(data))
      this.data = data
      // console.log("Print this.data : ", this.data)
    })
    // debugger
  }


  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'status', 'created_at', 'user', 'body', 'link'];

}
