import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {ValueService} from './value.service';
import { MyorderComponent } from './myorder/myorder.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';

import {FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import {DatafeedService} from './datafeed.service';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddtocartService } from './addtocart.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProductdetailsComponent,
    MyorderComponent,
    AdminComponent,
    ContactComponent,
    AboutComponent,
    CheckoutComponent,
    FeedbackComponent,
    ViewproductsComponent,
    UpdateproductsComponent
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ],
  providers: [DataService,ValueService,DatafeedService,AddtocartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
