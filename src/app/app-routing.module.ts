import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegestrationComponent } from './Components/regestration/regestration.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { AuthguardGuard } from './Auth/authguard.guard';

const routes: Routes = [
  {path:'register',component:RegestrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'forgotemail',component:ForgotEmailComponent},
  //{path:'dashboard',component:DashboardComponent},
  // {path:'createnote',component:CreateNoteComponent},
  {path:'dashboard',  component:DashboardComponent ,canActivate:[AuthguardGuard],
  children:[
    {path:'note',component:GetAllNotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
