import { Component, OnInit } from '@angular/core';
import { DatafeedService } from '../datafeed.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback:any=[];
  constructor(private datafeedservice:DatafeedService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.datafeedservice.getData().subscribe((res)=>
    {
      this.feedback=res;
    })
  }

}
