import { Ticket } from './ticket.model';
import { Subject } from 'rxjs/Subject';

export class TicketService {

    ticketsChanged = new Subject<Ticket[]>();
    startedEditing = new Subject<number>();
    payment: number = 0;
    total: number = 0;

    private tickets: Ticket[] = [
        new Ticket('Aliya', 1500),
        new Ticket('Eman', 1200)
    ];

    getTickets() {
        this.payment = this.totalAmount(this.tickets);
        return this.tickets.slice();
    }
    
    getTicket(index: number) {
        this.payment = this.totalAmount(this.tickets);
        return this.tickets[index];
    }

    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
        this.payment = this.totalAmount(this.tickets);
        this.ticketsChanged.next(this.tickets.slice());
    }

    updateTicket(index: number, newTicket: Ticket) {
        this.tickets[index] = newTicket;
        this.payment = this.totalAmount(this.tickets);
        this.ticketsChanged.next(this.tickets.slice());
    }
    
    deleteTicket(index: number) {
        this.tickets.splice(index, 1);
        this.payment = this.totalAmount(this.tickets);
        this.ticketsChanged.next(this.tickets.slice());
    }

    totalAmount(tickets: Ticket[]) {
        this.total = 0;
        for (let ticket of tickets) {
            this.total = ticket.amount + this.total;
        }
        return this.total;
    }
}