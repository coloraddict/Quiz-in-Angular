import { NgIfContext } from '@angular/common';
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
	buttonName: string = "START";
	gameover:boolean = false;

	constructor(){
		this.questions = [
		{
			id: 1,
			question: "The International Literacy Day is observed on?",
			option: [
				{optionid: 1, name: "Sep 8"},
				{optionid: 2, name: "Nov 28"},
				{optionid: 3, name: "May 2"},
				{optionid: 4, name: "Sep 22"},
			],
			answer: 1,
			selected: 0
		},
		{
			id: 2,
			question: "The language of Lakshadweep. a Union Territory of India, is",
			option: [
				{optionid: 1, name: "Tamil"},
				{optionid: 2, name: "Hindi"},
				{optionid: 3, name: "Malayalam"},
				{optionid: 4, name: "Telugu"},
			],
			answer: 3,
			selected: 0
		},
		{
			id: 2,
			question: "In which group of places the Kumbha Mela is held every twelve years?",
			option: [
				{optionid: 1, name: "Ujjain. Purl; Prayag. Haridwar"},
				{optionid: 2, name: "Prayag. Haridwar, Ujjain,. Nasik"},
				{optionid: 3, name: "Rameshwaram. Purl, Badrinath. Dwarika"},
				{optionid: 4, name: "Chittakoot, Ujjain, Prayag,'Haridwar"},
			],
			answer: 2,
			selected: 0
		},
		]

		this.currentIndex = 0;
		this.currentQuestionSet = this.questions[this.currentIndex];
	}

	next(){
		this.currentIndex++;
		this.currentQuestionSet = this.questions[this.currentIndex];
	}

	submit(){
		this.buttonName = "Replay";
		if(this.currentIndex+1 == this.questions.length) {
			this.gameover = true;
			this.start = false;
			this.correct = 0;
			this.noAttempted = 0;
			this.questions.map(x => {
				if(x.selected!=0) {
					if(x.selected == x.answer) {
						this.correct++;
					}
				} else {
					this.noAttempted++;
				}
				x.selected = 0;
			})
		}
	}

	startQuiz(){
		this.gameOver = false;
		this.currentIndex = 0;
		this.currentQuestionSet = this.questions[this.currentIndex];
		this.start = true;
	}
}
