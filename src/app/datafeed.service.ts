import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

const api="http://localhost:2222/feedbacks/";
@Injectable({
  providedIn: 'root'
})

export class DatafeedService {
 public saveData(data){
    return this.httpclient.post(api,data);
  }
  getData(){
    return this.httpclient.get(api);
  }
  constructor(private httpclient:HttpClient) { }
}
