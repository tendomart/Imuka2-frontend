import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentdashboardComponent } from '../dashboard/agentdashboard/agentdashboard.component';
import { DashanalyticsComponent } from '../dashboard/pages/dashanalytics/dashanalytics.component';
import { AdddealComponent } from '../dashboard/pages/adddeal/adddeal.component';

const routes: Routes = [
 
  {
    path: '', component: AgentdashboardComponent, children: [
      {
        path: 'dashboard/analytics', component: DashanalyticsComponent
      },
      {
        path: 'dashboard/add-deal', component: AdddealComponent
      },
      {
        path: '', component: DashanalyticsComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaselayoutRoutingModule { }
