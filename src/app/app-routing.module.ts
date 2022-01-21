import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'project/:label', component: ProjectInfoComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' },
  { path: '**',   redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
