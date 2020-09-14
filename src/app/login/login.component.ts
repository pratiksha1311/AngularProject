import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 inputType:string='password';
 input:string='text';
 sign:any=[];
 

 getSignupData(){
  this.valueservice.getData().subscribe((res)=>{
    this.sign=res;
  })
}


  constructor(private valueservice:ValueService) {   }

  ngOnInit(): void {
    this.getSignupData();
  }
  show(){
    if(this.inputType=='password'){
      this.inputType='text';      
    }
      else
        this.inputType='password';    
  }
}