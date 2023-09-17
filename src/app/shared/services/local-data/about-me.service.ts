import { Injectable } from '@angular/core';
import { AboutMeSkills } from '../../interfaces/about-me-skills';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  constructor() {}

  aboutMeSkillsData: AboutMeSkills[] = [
    {
      skill: 'HTML',
    },
    {
      skill: 'CSS',
    },
    {
      skill: 'JavaScript',
    },
    {
      skill: 'TypeScript',
    },
    {
      skill: 'Angular',
    },
    {
      skill: 'RWD',
    },
    {
      skill: 'Basic MySQL',
    },
    {
      skill: 'Git',
    },
    {
      skill: 'REST API',
    },
  ];
}
