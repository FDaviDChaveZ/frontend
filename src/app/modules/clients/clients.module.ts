import { NgModule } from "@angular/core";
import { ClientsComponent } from "./clients.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ClientsRoutingModule } from "./clients.routing.module";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

@NgModule({
    declarations: [ClientsComponent],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        ReactiveFormsModule
    ],
    providers:[
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class ClientsModule { }


