import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { isNil } from 'lodash';
import { ApiService } from '../shared/services/api.service';
import { Subject, takeUntil } from 'rxjs';
import { DemoComment } from '../shared/models/demo-comment.model';
import { ErrorHandlerModel } from '../shared/models/error-handler.model';
import { MockCommentsList } from '../shared/models/mock-comments.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // We use this subscription to manage the API calls.
  // Part of the RxJS libraries.
  private subscription$: Subject<void> = new Subject();	

  public isHidden: boolean = true;
  public displayedColumns: string[] = ['id', 'status', 'created', 'user', 'body', 'link'];
  public dataSource!: MatTableDataSource<DemoComment>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Used to store the repoName the user typed into the input box.
  public repoName: string = '';

  // Used when the user starts the search for comments.
  public isRequestInProgress: boolean = false;
  public errorHandler: ErrorHandlerModel = new ErrorHandlerModel();

  // Will store the data back from the API call response.
  public searchListDemoComments: Array<DemoComment> = new Array();

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
  }

  // When users types in a repo name, and triggers the search for comments.
  // The repoName is passed into the API call using the ApiService.
  public toggleComments(): void {

	const repoName: string = this.repoName.trim();

	if (isNil(repoName) || repoName === "") {
		console.log("Input field is empty.");
		return;
	}

	// Lets grab the value in the input field on the HTML.
	console.log("Get and save comments from this repo and store in DB: ", repoName);
	this.isRequestInProgress = true;

	this.apiService.getAndSaveCommentsByRepoName(repoName).pipe(
		takeUntil(this.subscription$),
	).subscribe({
		next: (demoComments: any) => {
			this.isRequestInProgress = false;
			debugger;
			console.log('Got a response back, the comments were saved successfully.');
			// The response returns a list of comments.
			this.searchListDemoComments = JSON.parse(MockCommentsList.COMMENTS_JSON_RESPONSE_DATA);
			
		},
		error: (error) => {
			this.isRequestInProgress = false;
			this.errorHandler.throwCustomError('Something went wrong, please try again.');
		}
	});
    
  }

}
