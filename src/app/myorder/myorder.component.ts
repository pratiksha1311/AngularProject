import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {AddtocartService} from '../addtocart.service';
import {ActivatedRoute,Router} from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms'; 

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  
  product:any=[];
  id:number;
  form:FormGroup;
  constructor(private dataservice:DataService,private addtocartservice:AddtocartService,private activatedroute:ActivatedRoute) { }

 delete(id){
    this.dataservice.deleteData(id).subscribe((res)=>{
      alert("data deleted successfully");
      this.getProductData();
    })
  }
  getProductData(){
    this.addtocartservice.getDataById(this.id,this.form.value).subscribe((res)=>{
        this.product=res;
    })
  }

  



  ngOnInit(): void {

    this.getProductData();

    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.product =data; 
        this.form=new FormGroup({
          product_code:new FormControl(this.product.product_code),
          product_img:new FormControl(this.product.product_img),
          product_desc:new FormControl(this.product.product_desc),
          product_price:new FormControl(this.product.product_price)
        })
      })
    })
    
    this.getProductData();
   /* this.form=new FormGroup(
     {
       product_code:new FormControl(""),
       product_img:new FormControl(""),
       product_desc:new FormControl(""),
       product_price:new FormControl("")
     })
 */

 
  }


}