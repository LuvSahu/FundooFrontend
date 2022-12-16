import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegestrationComponent } from './Components/regestration/regestration.component';

const routes: Routes = [
  {path:'register',component:RegestrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'forgotemail',component:ForgotEmailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
