import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 constructor(private http: HttpClient, private auth: UserService) { }

  public getQuestions(pageNumber: number = 1, tag: string = null, keyWord: string = null, author: string = null) {
    const offset = (pageNumber - 1) * environment.pageSize;
    let params = new HttpParams().set('offset', String(offset)).append('limit', String(environment.pageSize));
    if (tag !== null) {
      params = params.set('tag', tag);
    }
    if (keyWord !== null) {
      params = params.set('keyword', keyWord);
    }
    if (author !== null) {
      params = params.set('author', author);
    }
    if (this.auth.isLoggedIn()) {
      return this.http.get(environment.apiUrl + '/question/', {params, headers: this.auth.setHeaders()});
    } else {
      return this.http.get(environment.apiUrl + '/question/', {params});
    }
  }
}
