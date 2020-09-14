import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  product:any=[];
  constructor(private dataservice:DataService) { }
  delete(id){
    this.dataservice.deleteData(id).subscribe((res)=>{
      alert("data deleted successfully");
      this.getProductData();
    })
  }
  getProductData(){
    this.dataservice.getData().subscribe((res)=>{
        this.product=res;
    })
  }
  ngOnInit(): void {
    this.getProductData();
  }

}
