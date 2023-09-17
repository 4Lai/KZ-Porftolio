import { Injectable } from '@angular/core';
import { HeaderData } from '../../interfaces/header-data';

@Injectable({
  providedIn: 'root',
})
export class HeaderDataService {
  constructor() {}

  navBarElements: HeaderData[] = [
    {
      aboutMe: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
  ];
}
