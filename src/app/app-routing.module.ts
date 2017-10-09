import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './ticket/ticket.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/ticket', pathMatch: 'full' },
    { path: 'ticket', component: TicketComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }