import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'workout', loadChildren: () => import('./feature/workout/workout.module').then(m => m.WorkoutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
