import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentdashboardComponent } from './agentdashboard.component';
import { AdddealComponent } from '../pages/adddeal/adddeal.component';
import { DashanalyticsComponent } from '../pages/dashanalytics/dashanalytics.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AgentdashboardComponent ,
   
    children: [
      {
      path: '',
      children: [
        { path: 'adddeal', component: AdddealComponent },
        { path: 'analytics', component: DashanalyticsComponent }
       
      ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentdashboardRoutingModule { }
