import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentdashboardComponent } from './layout/dashboard/agentdashboard/agentdashboard.component';
import { AdddealComponent } from './layout/dashboard/pages/adddeal/adddeal.component';
import { DashanalyticsComponent } from './layout/dashboard/pages/dashanalytics/dashanalytics.component';
import { AppComponent } from './app.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';

const routes: Routes = [
  
  {
    path: '',
    component:  BaselayoutComponent,
    children: [

      // Dashboads
      {path: 'agentdashboard', component: AgentdashboardComponent},
      {path: '', component:  DashanalyticsComponent, },
      {path: 'dashboard/analytics', component: DashanalyticsComponent },
      {path: 'dashboard/add-deal', component: AdddealComponent },
     
    ]},
{path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
