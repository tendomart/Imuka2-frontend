import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentdashboardComponent } from './layout/dashboard/agentdashboard/agentdashboard.component';
import { AdddealComponent } from './layout/dashboard/pages/adddeal/adddeal.component';
import { DashanalyticsComponent } from './layout/dashboard/pages/dashanalytics/dashanalytics.component';
import { AppComponent } from './app.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';

const routes: Routes = [
  {path: '', component:  BaselayoutComponent},
 //{path: '', component:  AgentdashboardComponent }
{ path: 'agentdashboard', loadChildren: './layout/baselayout/baselayout.module#BaselayoutModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
