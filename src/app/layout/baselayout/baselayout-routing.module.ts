import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentdashboardComponent } from '../dashboard/agentdashboard/agentdashboard.component';
import { DashanalyticsComponent } from '../dashboard/pages/dashanalytics/dashanalytics.component';
import { AdddealComponent } from '../dashboard/pages/adddeal/adddeal.component';
import { AlldealsComponent } from '../dashboard/pages/alldeals/alldeals.component';

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
        path: 'dashboard/all-deal', component: AlldealsComponent
      },
      {
        path: 'dashboard/edit-deal', component: AlldealsComponent
      },
      {
        path: 'dashboard/deal-details', component: AlldealsComponent
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
