import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const api="http://localhost:4444/signups/";
@Injectable({
  providedIn: 'root'
})


export class ValueService {
  saveData(data){
    return this.httpclient.post(api,data);
  }

 getData(){
   return this.httpclient.get(api);
 }
 
getDataById(id){
  return this.httpclient.get(api+id);
}



deleteData(id){
  return this.httpclient.delete(api+id);
}
  constructor(private httpclient:HttpClient) { }
}
