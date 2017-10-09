import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ticket } from './ticket.model';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit, OnDestroy {

  tickets: Ticket[];
  private subscription: Subscription;

  @Input() payment: number;
  @Input() tax: number; 

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
    this.payment = this.ticketService.payment;
    
    this.subscription = this.ticketService.ticketsChanged
      .subscribe(
        (tickets: Ticket[]) => {
          this.tickets = tickets;
          this.payment = this.ticketService.payment;
        }
      );
  }

  onEditItem(index: number) {
    this.payment = this.ticketService.payment;
    this.ticketService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
