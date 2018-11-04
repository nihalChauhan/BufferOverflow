import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private auth: UserService) { }

  public addUpVote(id: string) {
    return this.http.post(environment.apiUrl + '/upvote?answerId=' + id, null, {headers: this.auth.setHeaders()});
  }

  public addDownVote(id: string) {
    return this.http.post(environment.apiUrl + '/downvote?answerId=' + id, null, {headers: this.auth.setHeaders()});
  }

  public removeUpVote(id: string) {
    return this.http.delete(environment.apiUrl + '/upvote?answerId=' + id, {headers: this.auth.setHeaders()});
  }

  public removeDownVote(id: string) {
    return this.http.delete(environment.apiUrl + '/downvote?answerId=' + id, {headers: this.auth.setHeaders()});
  }
}
