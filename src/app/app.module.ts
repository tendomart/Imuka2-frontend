import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SearchFilterComponent } from './search-filter/search-filter.component';
//import { AgentdashboardComponent } from './layout/dashboard/agentdashboard/agentdashboard.component';
//import { SidenavComponent } from './layout/dashboard/components/sidenav/sidenav.component';
//import { DashanalyticsComponent } from './layout/dashboard/pages/dashanalytics/dashanalytics.component';
//import { DashfooterComponent } from './layout/dashboard/components/dashfooter/dashfooter.component';
//import { DashheaderComponent } from './layout/dashboard/components/dashheader/dashheader.component';
//import { AdddealComponent } from './layout/dashboard/pages/adddeal/adddeal.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';
// import { DealdetailsComponent } from './layout/dashboard/pages/dealdetails/dealdetails.component';
//import { AlldealsComponent } from './layout/dashboard/pages/alldeals/alldeals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SearchFilterComponent,
    //AgentdashboardComponent,
    //SidenavComponent,
    //DashanalyticsComponent,
   // DashfooterComponent,
   // DashheaderComponent,
   // AdddealComponent,
    BaselayoutComponent,
    //DealdetailsComponent,
   // AlldealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
