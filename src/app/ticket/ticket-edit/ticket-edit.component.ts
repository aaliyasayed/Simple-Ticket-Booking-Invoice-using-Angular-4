import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') ticketForm: NgForm;
  subscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ticket;
  payment: any;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.subscription = this.ticketService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.ticketService.getTicket(index);
          this.ticketForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
    }
    
    onSubmit(form: NgForm) {
      const value = form.value;
      const newTicket = new Ticket(value.name, value.amount);
      
      if (this.editMode) {
        this.ticketService.updateTicket(this.editedItemIndex, newTicket);
      } else {
        this.ticketService.addTicket(newTicket);
      }

      this.editMode = false;
      this.payment = this.ticketService.payment;
      form.reset();
  }

  onDelete() {
    this.ticketService.deleteTicket(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.ticketForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
