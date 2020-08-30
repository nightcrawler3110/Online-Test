import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  startEventHandler()
  {
    this.router.navigateByUrl('/test/'+1);
  }

}
