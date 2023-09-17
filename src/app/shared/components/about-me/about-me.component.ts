import { Component } from '@angular/core';
import { AboutMeService } from '../../services/local-data/about-me.service';
import { AboutMeSkills } from '../../interfaces/about-me-skills';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  skillsData: AboutMeSkills[] = this.aboutMeService.aboutMeSkillsData;

  constructor(private aboutMeService: AboutMeService) {}
}
