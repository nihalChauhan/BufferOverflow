import { Component, OnInit } from '@angular/core';
import { IAnswer } from 'src/app/models/answer.model';
import { IQuestion } from 'src/app/models/question.model';
import { QuestionService } from './question.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Page } from 'src/app/models/page.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  question: IQuestion;
  answers: IAnswer[];
  pagination: Page;
  constructor(private api: QuestionService,  private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.pagination = new Page();
    this.pagination.currentPage = 1;
    this.pagination.totalPages = 1;
    userService.loggedInObservable.subscribe(res => {
      this.loggedIn = res;
      if (this.loggedIn) {
        this.username = JSON.parse(localStorage.getItem('user')).username;
      }
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: Params) => {
      this.api.getQuestion(this.route.snapshot.queryParams['id']).subscribe(data => {
        this.question = data['question'];
        this.api.getAnswers(this.route.snapshot.queryParams['id']).subscribe(answerData => {
          this.answers = answerData['result'].answers;
          this.pagination.totalPages = Math.ceil(answerData['result'].total / environment.pageSize);
          if (answerData['results'].count === 0) {
            this.pagination.totalPages = this.pagination.currentPage;
          }
          console.log('total pages ' + answerData['result'].total );
        });
      });
    });
  }

  answerUpdate(event: any) {
    this.api.getAnswers(this.route.snapshot.queryParams['id']).subscribe(commentsData => {
      this.answers = commentsData['result'].answers;
    });
  }

  showMore() {
    this.pagination.currentPage++;
    this.api.getAnswers(this.route.snapshot.queryParams['id'], this.pagination.currentPage).subscribe(answerData => {
      this.answers = this.answers.concat(answerData['result'].answers);
      this.pagination.totalPages = Math.ceil(answerData['result'].total / environment.pageSize);
    });
  }

  // answerDelete(event: any) {
  //   this.api.deleteAnswer(this.route.snapshot.queryParams['slug'], event).subscribe();
  //   this.comments.splice( this.comments.indexOf(this.comments.find(c => c.id === event)), 1 );
  // }

}
