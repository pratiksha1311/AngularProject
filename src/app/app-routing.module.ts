import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyorderComponent } from './myorder/myorder.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';




const routes: Routes = [
  {path:"log",component:LoginComponent} ,
  {path:"",component:HomeComponent},
  {path:"hom",component:HomeComponent},
  {path:"sign",component:SignupComponent},
  {path:"prodetails",component:ProductdetailsComponent},
  {path:"myor/:id",component:MyorderComponent},
  {path:"adminlog",component:AdminComponent},
  {path:"con",component:ContactComponent},
  {path:"abo",component:AboutComponent},
  {path:"checkot",component:CheckoutComponent},
{path:"fed",component:FeedbackComponent},
{path:"view",component:ViewproductsComponent},
  {path:"update/:id",component:UpdateproductsComponent}
 //{path:"**",component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
