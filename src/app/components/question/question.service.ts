import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, private auth: UserService) { }

  public getQuestion(id: string) {
    if (this.auth.isLoggedIn()) {
      return this.http.get(environment.apiUrl + '/question/' + id, {headers: this.auth.setHeaders()});
    } else {
      return this.http.get(environment.apiUrl + '/question/' + id);
    }
  }

  // public deleteArticle(slug: string) {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const token = 'Token ' + user.token;
  //   return this.http.delete(environment.apiUrl + '/articles/' + slug, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     }
  //   });
  // }

  public getAnswers(id: string, pageNumber: number = 1) {
    const offset = (pageNumber - 1) * environment.pageSize;
    const params = new HttpParams().set('offset', String(offset)).append('limit', String(environment.pageSize));
    if (this.auth.isLoggedIn()) {
      return this.http.get(environment.apiUrl + '/answer/' + id, {params: params, headers: this.auth.setHeaders()});
    } else {
      return this.http.get(environment.apiUrl + '/answer/' + id, {params: params});
    }
  }

  // public deleteComment(slug: string, id: number) {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const token = 'Token ' + user.token;
  //   return this.http.delete(environment.apiUrl + `/articles/${slug}/comments/${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     }
  //   });
  // }
}
