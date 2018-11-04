import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { IQuestion } from 'src/app/models/question.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/models/page.model';
import { environment } from 'src/environments/environment';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: IQuestion[];
  pagination: Page;
  questionsCount: number;
  activeTag = null;
  activeKeyword = null;
  activeAuthor = null;
  tagName = 'afsaf';

  constructor(private api: HomeService, private router: Router, private route: ActivatedRoute) {
    this.pagination = new Page();
    this.pagination.currentPage = 1;
    this.pagination.totalPages = 1;
  }

  ngOnInit() {
    this.activeTag = this.route
      .queryParams
      .subscribe(params => {
        this.activeTag = params['tag'];
        this.activeKeyword = params['keyword'];
        this.activeAuthor = params['author'];
        this.pagination.currentPage = params['page'];
        if (this.pagination.currentPage === undefined) {
          this.pagination.currentPage = 1;
        }
        this.queryQuestions();
      });
  }

  queryQuestions() {
    this.api.getQuestions(this.pagination.currentPage, this.activeTag, this.activeKeyword, this.activeAuthor)
      .subscribe(
        (data) => {
          this.questions = data['result'].questions;
          this.pagination.totalPages = Math.ceil(data['result'].total / environment.pageSize);
      }, (error) => this.router.navigate(['/404'])
    );
  }
}
