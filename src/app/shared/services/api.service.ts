import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) { 
	
	}

	public getAndSaveCommentsByRepoName(repoName: string): Observable<any> {

		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json;');
		const httpOptions = {
			headers: headers
		};
		const payload = {
			'repo': repoName,
		};

		return this.http.post<any>(environment.api_gateway.url + '/get-and-save-comments-from-repo', payload)
			.pipe(
				map((response: any) => {
					debugger;
					return JSON.parse(response.body);
				}));
	}
}
