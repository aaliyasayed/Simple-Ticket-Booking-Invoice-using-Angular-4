import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TicketComponent } from './ticket/ticket.component';

import { AppRoutingModule } from './app-routing.module';
import { TicketEditComponent } from './ticket/ticket-edit/ticket-edit.component';

import { TicketService } from './ticket/ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    TicketEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
