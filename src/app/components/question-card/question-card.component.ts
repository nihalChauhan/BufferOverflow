import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question: IQuestion;
  constructor() { }

  ngOnInit() {
  }

}
