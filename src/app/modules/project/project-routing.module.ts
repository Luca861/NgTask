import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ProjectContainerComponent } from "./pages/project-container/project-container.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectComponent } from "./pages/project.component";

const routes:Routes = [
  {
    path: '',
    component: ProjectComponent,
  children: [
  {path: 'detail/:id', component: ProjectDetailComponent},
  {path: '', component: ProjectContainerComponent},
]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})


export class ProjectRoutingModule{}
