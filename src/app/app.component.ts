import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
 // img:string="../../assets/logo.jpg";
 img:string="../../assets/main.jpg"; 
 loginbtn:boolean;
logoutbtn:boolean;

constructor() {}

}
