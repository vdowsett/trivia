"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var quiz_model_1 = require("./quiz.model");
var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.questions = [
            {
                "text": "Florence Nightingale became known as \"the Lady With the Lamp\" during which war?",
                "answers": [
                    {
                        "correct": false,
                        "text": "American Civil War"
                    },
                    {
                        "correct": false,
                        "text": "World War I"
                    },
                    {
                        "correct": true,
                        "text": "Crimean War"
                    },
                    {
                        "correct": false,
                        "text": "World War II"
                    }
                ]
            },
            {
                "text": "In a quarter-mile race, which animal can be expected to win?",
                "answers": [
                    {
                        "correct": false,
                        "text": "Lion"
                    },
                    {
                        "correct": true,
                        "text": "Pronghorn Antelope"
                    },
                    {
                        "correct": false,
                        "text": "Quarter Horse"
                    },
                    {
                        "correct": false,
                        "text": "Giraffe"
                    }
                ]
            }
        ];
        onSelect(answer, quiz_model_1.Answer);
        {
            if (answer.correct) {
                console.log('answer correct');
            }
            else {
                console.log('answer wrong');
            }
        }
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'app-quiz',
            templateUrl: './quiz.component.html',
            styleUrls: ['./quiz.component.css']
        })
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
