import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quiz-in-Angular';
  questions: any;
  currentIndex: number;
  noAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start: boolean = false;
  gameOver: boolean = false;
  buttonName: string = "Play";

  constructor(){
    this.questions = [
      {
        id: 1,
        question: "What is the full form of IP?",
        option: [
          {optionid: 1, name: "Internet program"},
          {optionid: 2, name: "Internet protocol"},
          {optionid: 3, name: "Interface program"},
          {optionid: 4, name: "Interface protocol"},
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 2,
        question: "Select the smallest memory size",
        option: [
          {optionid: 1, name: "kilobyte"},
          {optionid: 2, name: "megabyte"},
          {optionid: 3, name: "gigabyte"},
          {optionid: 4, name: "terabyte"},
        ],
        answer: 1,
        selected: 0
      },
    ]

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }
}
