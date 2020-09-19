import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api="http://localhost:3333/addcarts/";
@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
   saveData(data){
     return this.httpclient.post(api,data);
  }
  getData(){
    return this.httpclient.get(api);
  }
  getDataById(id,data){
    return this.httpclient.get(api+id,data);
  }
  constructor(private httpclient:HttpClient) { }
}
