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

import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
<<<<<<< HEAD
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
=======

>>>>>>> ec23fc86ac531e83098e818e48427ae74931b65a
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

    NotificationPanelComponent,
<<<<<<< HEAD
    MainNavComponent,
=======

>>>>>>> ec23fc86ac531e83098e818e48427ae74931b65a
   // AlldealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
