import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentdashboardComponent } from '../dashboard/agentdashboard/agentdashboard.component';
import { SidenavComponent } from '../dashboard/components/sidenav/sidenav.component';
//import { DashanalyticsComponent } from '../dashboard/components/dashanalytics/dashanalytics.component';
import { DashfooterComponent } from '../dashboard/components/dashfooter/dashfooter.component';
import { DashheaderComponent } from '../dashboard/components/dashheader/dashheader.component';
//import { AdddealComponent } from '../dashboard/components/adddeal/adddeal.component';


import { DashanalyticsComponent } from '../dashboard/pages/dashanalytics/dashanalytics.component';
import { AdddealComponent } from '../dashboard/pages/adddeal/adddeal.component';
import { AlldealsComponent } from '../dashboard/pages/alldeals/alldeals.component';
import { DealdetailsComponent } from '../dashboard/pages/dealdetails/dealdetails.component';

import { BaselayoutRoutingModule } from './baselayout-routing.module';

@NgModule({
  declarations: [
    AgentdashboardComponent,
    SidenavComponent ,
    DashheaderComponent ,
    DashfooterComponent,
    DashanalyticsComponent,
    AdddealComponent,
    AlldealsComponent,
    DealdetailsComponent ,
  ],
  imports: [
    CommonModule,
    BaselayoutRoutingModule
  ]
})
export class BaselayoutModule { }
