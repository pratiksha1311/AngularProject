import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api="http://localhost:8888/products/"
@Injectable({
  providedIn: 'root'
})


export class DataService {

  saveData(data){
    return this.httpclient.post(api,data);
  }

  getDataById(id){
    return this.httpclient.get(api+id);
  }

  getId(id,data){
    return this.httpclient.get(api+id,data);
  }

  getData(){
      return this.httpclient.get(api);
  }
  updateData(id,data){
    return this.httpclient.put(api+id,data);
  }
  deleteData(id){
    return this.httpclient.delete(api+id);
  }
  constructor(private httpclient:HttpClient) { }
}
