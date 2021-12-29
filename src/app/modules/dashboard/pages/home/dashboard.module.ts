import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    
  ]
})

export class DashboardModule{}
