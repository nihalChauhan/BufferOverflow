import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  constructor(private http: HttpClient, private auth: UserService) { }
  public addQuestion(title: string, description: string, tags: string) {
    const tagList = tags.split(' ');
    const questionObject = Object.assign({}, {
      title,
      description,
      tags: tagList
    });
    console.log(questionObject);
    return this.http.post(environment.apiUrl + '/question', questionObject, {headers: this.auth.setHeaders()});
  }
}
