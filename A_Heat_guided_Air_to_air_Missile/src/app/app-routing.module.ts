import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissileComponent } from './missile/missile.component';
import { HomeComponent } from './home/home.component';
import { EnrollComponent } from './enroll/enroll.component';
//import { TargetComponent } from './target/target.component';

const routes: Routes = [
//  { path: '', redirectTo: '/missile', pathMatch: 'full' },
{path:'' ,component:HomeComponent},
  { path: 'missile', component: MissileComponent },
  //{ path: 'target', component: TargetComponent },

  //    { path: 'home', component: HomeComponent },
//     { path: '**', component: MissileComponent } // Wildcard Route

    {path:'enroll',component:EnrollComponent} 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
