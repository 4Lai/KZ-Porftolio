import { Component } from '@angular/core';
import { ProjectsService } from '../../services/local-data/projects.service';
import { Projects } from '../../interfaces/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectsList: Projects[] = this.projectsService.projectsData;

  constructor(private projectsService: ProjectsService) {}
}
