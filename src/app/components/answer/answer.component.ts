import { Component, OnInit, Input } from '@angular/core';
import { IAnswer } from 'src/app/models/answer.model';
import { UserService } from 'src/app/services/user.service';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { AnswerService } from './answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: IAnswer;
  upClass: string;
  downClass: string;
  loggedIn: boolean;
  canDelete: boolean;
  constructor(private auth: UserService, private api: AnswerService) {
    this.auth.loggedInObservable.subscribe(res => this.loggedIn = res);
    this.canDelete = false;
  }

  styliseButtons() {
    if (this.answer.downVoted) {
      this.downClass = 'btn btn-outline-danger';
    } else {
      this.downClass = 'btn btn-outline-secondary';
    }
    if (this.answer.upVoted) {
      this.upClass = 'btn btn-outline-success';
    } else {
      this.upClass = 'btn btn-outline-secondary';
    }
  }

  ngOnInit() {
    if (this.loggedIn && this.answer.author.userName === JSON.parse(localStorage.getItem('user')).username) {
      this.canDelete = true;
    }
    this.styliseButtons();
  }
  delete() {
    console.log('delete emit will come here');
  }

  upVote() {
    if (this.answer.upVoted) {
      this.api.removeUpVote(this.answer.id).subscribe(data => {
        this.answer.upCount--;
        this.answer.upVoted = false;
        this.styliseButtons();
      });
    } else {
      this.api.addUpVote(this.answer.id).subscribe(data => {
        this.answer.upCount++;
        this.answer.upVoted = true;
        if (this.answer.downVoted) {
          this.answer.downVoted = false;
          this.answer.downCount--;
        }
        this.styliseButtons();
      });
    }
  }

  downVote() {
    this.styliseButtons();
    if (this.answer.downVoted) {
      this.api.removeDownVote(this.answer.id).subscribe(data => {
        this.answer.downCount--;
        this.answer.downVoted = false;
        this.styliseButtons();
      });
    } else {
      this.api.addDownVote(this.answer.id).subscribe(data => {
        this.answer.downCount++;
        this.answer.downVoted = true;
        if (this.answer.upVoted) {
          this.answer.upVoted = false;
          this.answer.upCount--;
        }
        this.styliseButtons();
      });
    }
  }
}
