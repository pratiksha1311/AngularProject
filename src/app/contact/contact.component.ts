import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { DatafeedService } from '../datafeed.service';
import {Feedback} from './feeds';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form:FormGroup;
  
  constructor(private datafeedservice:DatafeedService) { }
  
  ngOnInit(): void {
   
    this.form=new FormGroup({
      fname:new FormControl(""),
    femail:new FormControl(""),
    fcontact:new FormControl(""),
    fmsg:new FormControl("")
    })
  }
  
  send(){
    this.datafeedservice.saveData(this.form.value).subscribe((res)=>
    {
      alert("Thank You for Your Feedback.");
    })
  }

}
