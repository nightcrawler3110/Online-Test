import { ManageQuestionService } from './../manage-question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  marks:number
  constructor(public manageQuestion: ManageQuestionService, public router:Router) {
   this.marks= this.manageQuestion.calculateScore()
   }

  ngOnInit(): void {
    // this.marks=this.activatedRoute.snapshot.params["marks"];
  }
  analyseEventHandler()
  {
    this.router.navigateByUrl('/test/'+1);
  }

}
