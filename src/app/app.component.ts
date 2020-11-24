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
	interval: any;
	timeLeft: number;

	constructor(){
		this.questions = [
			{
				id: 1,
				question: "What does HTML stand for?",
				option: [
					{optionid: 1, name: "Home Tool Markup Language"},
					{optionid: 2, name: "Hyperlinks and Text Markup Language"},
					{optionid: 3, name: "Hyper Text Markup Language"},
				],
				answer: 3,
				selected: 0
			},
			{
				id: 2,
				question: "Who is making the Web standards?",
				option: [
					{optionid: 1, name: "Microsoft"},
					{optionid: 2, name: "Mozilla"},
					{optionid: 3, name: "The World Wide Web Consortium"},
					{optionid: 4, name: "Google"},
				],
				answer: 3,
				selected: 0
			},
			{
				id: 3,
				question: "Choose the correct HTML element for the largest heading:",
				option: [
					{optionid: 1, name: "<heading>"},
					{optionid: 2, name: "<head>"},
					{optionid: 3, name: "<h1>"},
					{optionid: 4, name: "<h6>"},
				],
				answer: 2,
				selected: 0
			},
			{
				id: 4,
				question: "What is the correct HTML element for inserting a line break?",
				option: [
					{optionid: 1, name: "<lb>"},
					{optionid: 2, name: "<br>"},
					{optionid: 3, name: "<break>"},
				],
				answer: 2,
				selected: 0
			},
			{
				id: 5,
				question: "What is the correct HTML for adding a background color?",
				option: [
					{optionid: 1, name: "<background>yellow</background>"},
					{optionid: 2, name: "<body style='background-color:yellow;'>"},
				],
				answer: 2,
				selected: 0
			},
			{
				id: 6,
				question: "Choose the correct HTML element to define important text",
				option: [
					{optionid: 1, name: "<strong>"},
					{optionid: 2, name: "<i>"},
					{optionid: 3, name: "<important>"},
					{optionid: 4, name: "<b>"},
				],
				answer: 2,
				selected: 0
			},
			{
				id: 7,
				question: "Choose the correct HTML element to define emphasized text",
				option: [
					{optionid: 1, name: "<i>"},
					{optionid: 2, name: "<em>"},
					{optionid: 3, name: "<italic>"},
				],
				answer: 2,
				selected: 0
			},
			{
				id: 8,
				question: "What is the correct HTML for creating a hyperlink?",
				option: [
					{optionid: 1, name: "<a>http://www.w3schools.com</a>"},
					{optionid: 2, name: "<a name='http://www.w3schools.com'>W3Schools.com</a>"},
					{optionid: 3, name: "<a>http://www.w3schools.com</a>"},
					{optionid: 4, name: "<a href='http://www.w3schools.com'>W3Schools</a>"},
				],
				answer: 4,
				selected: 0
			},
			{
				id: 9,
				question: "Which character is used to indicate an end tag?",
				option: [
					{optionid: 1, name: "<"},
					{optionid: 2, name: "*"},
					{optionid: 3, name: "/"},
					{optionid: 4, name: "^"},
				],
				answer: 3,
				selected: 0
			},
			{
				id: 9,
				question: "How can you open a link in a new tab/browser window?",
				option: [
					{optionid: 1, name: "<a href='url' new>"},
					{optionid: 2, name: "<a href='url' target='_blank'>"},
				],
				answer: 2,
				selected: 0
			},
		]

		this.currentIndex = 0;
		this.currentQuestionSet = this.questions[this.currentIndex];
	}

	ngOnInit(){
		// this.beginTimer();
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
		this.beginTimer();
	}

	private beginTimer(){
		console.log('here');
		
		// if(this.currentIndex <= this.questions.length) {
		// 	this.interval = setInterval( () => {
		// 		if(this.timeLeft > 0) {
		// 			this.timeLeft--;

		// 		}
		// 	}, 1000)
		// }
	}
}
