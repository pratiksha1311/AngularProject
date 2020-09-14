import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  inputType:string='password';
 input:string='text';
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    if(this.inputType=='password'){
      this.inputType='text';      
    }
      else
        this.inputType='password';    
  }

}
