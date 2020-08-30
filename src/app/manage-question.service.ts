import { Question } from './question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageQuestionService {
  questionArray: Question[]= new Array();
  selectedAnswerArray= new Array();
  analyse:boolean;

  constructor() {
    this.questionArray.push(new Question(1,"The Dampier-Hodges line is related to which of the following","Bay of Cambay","Palk Strait"," Andaman and Nicobar Islands","Sundarbans","Sundarbans"));
     this.questionArray.push(new Question(2,"Which of the following regions in India represents lowest altitude"," Kuttanad region in Kerala"," Saurashtra Region in Karnataka","Coromandel of Tamil Nadu","Malabar region of Kerala","Malabar region of Kerala"));
     this.questionArray.push(new Question(3,"“Satmala Hills” are located in which among the following states","Gujarat","Uttar Pradesh","Maharasthra","Rajasthan","Rajasthan"));
     
    this.questionArray.push(new Question(4,"In Which state of India , maximum Diamond Mines are found?","Bihar & Uttar Pradesh","Uttar Pradesh & Jharkhand","LMadhya Pradesh & Andhra Pradesh","Uttar Pradesh & Maharastra","Uttar Pradesh & Maharastra"));
    this.questionArray.push(new Question(5,"Which among the following rivers rises from the Milam Glacier in Kumaon Himalaya","Sharda","Ramganga","Gori Ganga","Yamuna","Yamuna"));
    this.questionArray.push(new Question(6,"Which country has passed a bill to promote the legacies of Gandhi and Martin Luther King Jr","India","USA","UK","Austrailia","Austrailia"));
    this.questionArray.push(new Question(7,"The Indian Government has imposed safeguard duty on which product till July 2021, to protect domestic manufacturers","Medical devices",
    "Solar cells",
    "Textile", "Electronics","Electronics"));
    this.questionArray.push(new Question(8,"The territory of Porus who offered strong resistance to Alexander was situated between the rivers of    ", "Sutlej and Beas",
    "Jhelum and Chenab",
    	"Ravi and Chenab",
    	"Ganga and Yamuna","Ganga and Yamuna"));
    this.questionArray.push(new Question(9,"Tripitakas are sacred books of","Buddhists","Hindus","Jains","None","Buddhists"));
    this.questionArray.push(new Question(10,"The theory of economic drain of India during British imperialism was propounded by",	"Jawaharlal Nehru",
    "	Dadabhai Naoroji",
    "R.C. Dutt",
    "M.K. Gandhi","M.K. Gandhi"));

    this.analyse=false;
     
    }
   analyseQuestionEventHandler()
   {
     return this.analyse;
   }
   getAllQuestions()
   {
     return this.questionArray;
   }
   getQuestionById(qId:number)
   {
     var pos= this.questionArray.findIndex(item=>item.questionNumber==qId)
     return this.questionArray[pos];
        
     
   }
   saveAnswer(p:Array<string>)
   {
      this.selectedAnswerArray=p;
      
     }
   getAllAnswers()
   {
     return this.selectedAnswerArray;
   }
   calculateScore()
   {

     
        this.analyse=true;

      var score=0;
      for(let i=0;i<this.questionArray.length;i++)
      {
         if(this.questionArray[i].Answer==this.selectedAnswerArray[i])
        {
          score++

        }
        
      }
      return score;
   }

}
