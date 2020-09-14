import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'; 
import { DataService } from '../data.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {
  form:FormGroup;
 prod:any=[];
  id:number;
 

  update(){
  // this.product.push(this.form.value);
      this.dataservice.updateData(this.id,this.form.value).subscribe((res)=>{
          alert("Data updated successfully");
          this.router.navigateByUrl("/view");
      })
    }
  constructor(private dataservice:DataService,private activatedrouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe((param)=>
    {
      this.id=param["id"];
      this.dataservice.getDataById(this.id).subscribe((data)=>{
        this.prod=data;
        this.form=new FormGroup(
          {
            product_code:new FormControl(this.prod.product_code),
            product_img:new FormControl(this.prod.product_img),
            product_desc:new FormControl(this.prod.product_desc),
            product_price:new FormControl(this.prod.product_price)
          })
      })
     
    })
   }
}
