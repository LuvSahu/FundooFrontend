import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegestrationComponent } from './Components/regestration/regestration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './update/update.component';
import { IconsComponent } from './Components/icons/icons.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { AuthguardservicesService } from './Services/authservices/authguardservices.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegestrationComponent,
    ForgotPasswordComponent,
    ForgotEmailComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    UpdateComponent,
    IconsComponent,
    TrashComponent,
    ArchiveComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule

  ],
  providers: [
    AuthguardservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
