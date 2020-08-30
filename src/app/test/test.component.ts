import { ManageQuestionService } from './../manage-question.service';
import { Question } from './../question';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
   questionArray:Question[] =new Array();
  lastQues:boolean;
 currentQuestionNumber:number;
 marks:number;
 selected:number;
   selectedAnswerArray= new Array();
   analyse:boolean;

  constructor(public activatedRoute: ActivatedRoute, public router:Router, public manageQuestion: ManageQuestionService) { 
     this.lastQues=false;
    this.marks=0;
    this.selected=-1;
    this.questionArray=manageQuestion.getAllQuestions();
    this.selectedAnswerArray.push("");
    this.selectedAnswerArray.push("");

    this.selectedAnswerArray.push("");
    this.selectedAnswerArray.push("");

    this.selectedAnswerArray.push("");

    this.selectedAnswerArray.push("");

    this.selectedAnswerArray.push("");

    this.selectedAnswerArray.push("");

this.selectedAnswerArray.push("");
this.selectedAnswerArray.push("");
  
  }
  ngOnInit(): void {
    this.currentQuestionNumber = parseInt(this.activatedRoute.snapshot.params['questionNumber']);
       this.analyse=this.manageQuestion.analyseQuestionEventHandler();
      
   
  }
  
  nextQuestionEventHandler()
  {
    this.currentQuestionNumber =  parseInt(this.activatedRoute.snapshot.params['questionNumber'])
    var temp="option" +(this.selected);
    var userSelectedAnswer= this.questionArray[this.currentQuestionNumber-1][temp];
    console.log(userSelectedAnswer);
    // this.manageQuestion.saveAnswer(this.questionArray[this.currentQuestionNumber-1].questionNumber,userSelectedAnswer);
     this.selectedAnswerArray[this.currentQuestionNumber-1]=userSelectedAnswer;
    this.selected=-1;
      
    // 9 --> 8
    // 10 --> 9
    

    if(this.selectedAnswerArray[this.currentQuestionNumber]==this.questionArray[this.currentQuestionNumber].option1)
    {
      this.selected=1;
    }
    else  if(this.selectedAnswerArray[this.currentQuestionNumber]==this.questionArray[this.currentQuestionNumber].option2)

    {
      this.selected=2;
    }
    else if(this.selectedAnswerArray[this.currentQuestionNumber]==this.questionArray[this.currentQuestionNumber].option3)

    {
      this.selected=3;
    }
    else  if(this.selectedAnswerArray[this.currentQuestionNumber]==this.questionArray[this.currentQuestionNumber].option4)

    {
      this.selected=4;
    }

     




    this.currentQuestionNumber+=1;
     
    this.router.navigateByUrl("/test/" + this.currentQuestionNumber);
     
 

     
     
        

  }
  previousEventHandler()
  {
    this.currentQuestionNumber =  parseInt(this.activatedRoute.snapshot.params['questionNumber'])
    var temp="option" +(this.selected);
    var userSelectedAnswer= this.questionArray[this.currentQuestionNumber-1][temp];
    console.log(userSelectedAnswer);
    // this.manageQuestion.saveAnswer(this.questionArray[this.currentQuestionNumber-1].questionNumber,userSelectedAnswer);
     this.selectedAnswerArray[this.currentQuestionNumber-1]=userSelectedAnswer;
    this.selected=-1;

    // 9 -> 8
    // 8 -> 7
      
    

    if(this.selectedAnswerArray[this.currentQuestionNumber-2]==this.questionArray[this.currentQuestionNumber-2].option1)
    {
      this.selected=1;
    }
    else  if(this.selectedAnswerArray[this.currentQuestionNumber-2]==this.questionArray[this.currentQuestionNumber-2].option2)

    {
      this.selected=2;
    }
    else if(this.selectedAnswerArray[this.currentQuestionNumber-2]==this.questionArray[this.currentQuestionNumber-2].option3)

    {
      this.selected=3;
    }
    else  if(this.selectedAnswerArray[this.currentQuestionNumber-2]==this.questionArray[this.currentQuestionNumber-2].option4)

    {
      this.selected=4;
    
    }
    this.currentQuestionNumber=this.currentQuestionNumber-1
    this.router.navigateByUrl("/test/" + this.currentQuestionNumber)
  }
  changeRadioEventHandler(p1:number)
  {      
       this.selected=p1;
   }

  submitEventHandler()
  {
     

    var temp="option" + (this.selected)
    var userSelectedAnswer= this.questionArray[this.currentQuestionNumber-1][temp];
    this.manageQuestion.saveAnswer(this.selectedAnswerArray);
    

     this.router.navigateByUrl("/result");                
  }




  flipQuestionEventHandler(p1:number)
  {
         this.currentQuestionNumber =  parseInt(this.activatedRoute.snapshot.params['questionNumber'])
    var temp="option" +(this.selected);
    var userSelectedAnswer= this.questionArray[this.currentQuestionNumber-1][temp];
       this.selectedAnswerArray[this.currentQuestionNumber-1]=userSelectedAnswer;
     this.selected=-1;
     
      
    this.currentQuestionNumber=p1;

    if(this.selectedAnswerArray[p1-1]==this.questionArray[p1-1].option1)
    {
      this.selected=1;
    }
    else  if(this.selectedAnswerArray[p1-1]==this.questionArray[p1-1].option2)

    {
      this.selected=2;
    }
    else if(this.selectedAnswerArray[p1-1]==this.questionArray[p1-1].option3)

    {
      this.selected=3;
    }
    else  if(this.selectedAnswerArray[p1-1]==this.questionArray[p1-1].option4)

    {
      this.selected=4;
    
     }
     this.router.navigateByUrl("/test/" + p1)
  }

}
