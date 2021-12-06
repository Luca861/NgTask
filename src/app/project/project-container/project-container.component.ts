import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';
import {ProjectService} from "@app/project/project.service";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  selectedProject!:Project;

  projects: Project[] = [];
  projects$!: Observable<Project[]>;


  constructor(private  projectService : ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();

  }

  selectProject(project: Project){
    this.subscription = this.projectService.get(project.id).subscribe(data =>{
      this.selectedProject = data;
    })
  }

  submitProjectForm(project:Project){
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll())
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
