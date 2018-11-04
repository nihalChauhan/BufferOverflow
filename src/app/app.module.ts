import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TagComponent } from './components/tag/tag.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TopTagsComponent } from './components/top-tags/top-tags.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { AddAnswerComponent } from './components/add-answer/add-answer.component';
import { UpdateAnswerComponent } from './components/update-answer/update-answer.component';
import { UpVoteComponent } from './components/up-vote/up-vote.component';
import { DownVoteComponent } from './components/down-vote/down-vote.component';
import { AnswerComponent } from './components/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    TagComponent,
    PaginatorComponent,
    SearchBarComponent,
    TopTagsComponent,
    QuestionCardComponent,
    QuestionComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    AddAnswerComponent,
    UpdateAnswerComponent,
    UpVoteComponent,
    DownVoteComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
