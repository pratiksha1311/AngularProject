import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {FormGroup,FormControl} from '@angular/forms'; 
import {AddtocartService} from '../addtocart.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgPath:string="../../assets/diamond_necklace.jpg";
  imgPath2:string="../../assets/gold_necklace.jpg";
  imgPath3:string="../../assets/oxidised_necklace.jpg";
  imgPath4:string="../../assets/diamond_bangle.jpg";
  imgPath5:string="../../assets/Gold-Bangles.jpg";
  imgPath6:string="../../assets/oxidised_bangle.jpg";
  imgPath7:string="../../assets/jhumka.jpg";
  imgPath8:string="../../assets/gold_earrings.jpg";
  imgPath9:string="../../assets/oxidized-earrings.jpg";
  imgslide:string="../../assets/slide2.jpg";
  imgslide2:string="../../assets/slide3.jpg";
  imgslide3:string="../../assets/slide1.jpg";
  

  product:any=[];
  form:FormGroup;
 term:any;
id:number;

  constructor(private dataservice:DataService,private addtocartservice:AddtocartService,private activatedroute:ActivatedRoute) { }
  
    add(){
      // this.product.push(this.form.value);
          this.dataservice.getId(this.id,this.form.value).subscribe((res)=>{
              alert("data save successfully");
          })
      }
  getProductData(){
    this.dataservice.getData().subscribe((res)=>{
        this.product=res;
    })    
}




  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>{
      this.id=param["id"];
      console.log(this.id);
    })
   this.getProductData();
   this.form=new FormGroup(
    {
      product_code:new FormControl(""),
      product_img:new FormControl(""),
      product_desc:new FormControl(""),
      product_price:new FormControl("")
    })


  }

  
}
