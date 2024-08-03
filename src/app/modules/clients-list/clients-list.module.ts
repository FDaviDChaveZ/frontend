import { NgModule } from "@angular/core";
import { ClientsListComponent } from "./clients-list.component";
import { CommonModule } from "@angular/common";
import { ClientsListRoutingModule } from "./clients-list.routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({
    declarations: [ClientsListComponent],
    imports: [
        CommonModule,
        ClientsListRoutingModule,
        ReactiveFormsModule
    ],
    providers:[
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class ClientsListModule { }