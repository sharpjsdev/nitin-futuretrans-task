// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MakeCallService } from './make-call.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [ HttpClientModule,BrowserModule, FormsModule, AppRoutingModule,NgbModule],
  providers: [MakeCallService],
  bootstrap: [AppComponent],
})
export class AppModule {}
