import { Component, OnInit } from '@angular/core';
import {Sign} from './sign';
import {FormControl,FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { ValueService } from '../value.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;
  angForm:any;
  
  country:string[]=["India","USA","Japan","Swedan"];
 
  
  signup(){
    this.valueservice.saveData(this.form.value).subscribe((res)=>{
      alert("successfully registered.");
    })
  }
  constructor(private valueservice:ValueService,private fb: FormBuilder) {

    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required]
      });
   }

  ngOnInit(): void {
   

    this.form=new FormGroup({
      username:new FormControl(""),
    password:new FormControl(""),
    address:new FormControl(""),
    emailid:new FormControl(""),
    dob:new FormControl(""),
    gender:new FormControl(""),
    contact:new FormControl(""),
    country:new FormControl(this.country[0])
    })
  }

}