import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddAnswerService } from './add-answer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  @Input() id: string;
  errorList: string[];
  loggedIn: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('update') answerUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private api: AddAnswerService, private auth: UserService) {
    auth.loggedInObservable.subscribe(res => this.loggedIn = res);
  }

  ngOnInit() {
  }

  postAnswer(formValues) {
    this.api.postAnswer(formValues.useranswer, this.id)
      .subscribe(
        (data) => {
          (<HTMLInputElement>document.getElementById('useranswer')).value = '';
          this.answerUpdate.emit(true);
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
