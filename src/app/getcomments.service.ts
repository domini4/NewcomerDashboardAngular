import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetcommentsService {

  constructor(private http:HttpClient) { }

  getRepoComments(repo: string, classification: number){
    const params = new HttpParams()
      .set('repo', repo)
      .set('classification', classification);
    // let queryClass = new HttpParams();
    // let queryClass = classification;
    
    // let url = "https://wioyzq38s8.execute-api.us-east-1.amazonaws.com/dev/democommentsresource?classification=" + queryClass;
    // let url = "https://wioyzq38s8.execute-api.us-east-1.amazonaws.com/dev/democommentsresource?";
    let url = "https://wioyzq38s8.execute-api.us-east-1.amazonaws.com/dev/getnewcomercomments?";
    // console.log(this.http.get(url, {params: new HttpParams().set('repo', repo)}))
    // console.log(repo);
    return this.http.get(url, {params});
  }
}
