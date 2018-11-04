import { Component, OnInit } from '@angular/core';
import { AddQuestionService } from './add-question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;
  title: string;
  tags: string;
  description: string;

  constructor(private api: AddQuestionService, private router: Router) { }

  ngOnInit() {
  }

  postQuestion(formValues) {
   this.api.addQuestion(formValues.title, formValues.description, formValues.tags)
      .subscribe(
        (data) => {
          this.errorList = [];
          this.router.navigate(['question'], {queryParams: {id: data['question'].id}});
        },
        (error) => {
          this.errorList = [];
          const errors = error['error']['errors'];
          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              for (const errorMessage of errors[key]) {
                this.errorList.push(`${key} ${errorMessage}`);
              }
            }
          }
        }
    );
  }
}
