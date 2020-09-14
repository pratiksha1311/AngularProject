import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {FormGroup,FormControl} from '@angular/forms'; 
import { DataService } from '../data.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  form:FormGroup;
 
  
 

  add(){
  // this.product.push(this.form.value);
      this.dataservice.saveData(this.form.value).subscribe((res)=>{
          alert("data save successfully");
      })
  }
  constructor( private dataservice:DataService) { }

  ngOnInit(): void {
    

    this.form=new FormGroup(
      {
        product_code:new FormControl(""),
        product_img:new FormControl(""),
        product_desc:new FormControl(""),
        product_price:new FormControl("")
      })

  }

}
