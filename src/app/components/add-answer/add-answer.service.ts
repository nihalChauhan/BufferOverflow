import { Injectable } from '@angular/core';
import { QuestionService } from '../question/question.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddAnswerService {

  constructor(private http: HttpClient, private questionService: QuestionService, private auth: UserService) { }
  postAnswer(content: string, id: string) {
    const answerObject = Object.assign({}, {
      content: content,
      questionId: id
    });
    const res = this.http.post(environment.apiUrl + `/answer/`, answerObject, {
      headers: this.auth.setHeaders()
    });
    this.questionService.getAnswers(id).subscribe();
    return res;
  }
}
