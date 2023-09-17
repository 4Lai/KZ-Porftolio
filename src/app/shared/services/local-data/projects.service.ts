import { Injectable } from '@angular/core';
import { Projects } from '../../interfaces/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projectsData: Projects[] = [
    {
      projectName: 'NgVal',
      img: './../../../../assets/img/projects/ngValLaptop.png',
      description:
        'A database website which allows user to find useful informations about Valorant game like current game modes, agens, guns info and more.',
      link: 'https://ngval.netlify.app/',
      gitLink: 'https://github.com/4Lai/ngVal',
    },
    {
      projectName: 'Shidonogo',
      img: './../../../../assets/img/projects/shidonogoLaptop.png',
      description:
        'A website with anime and manga data, user can find there features like: most popular anime character, top trending anime and mangas, current/previous/upcoming anime with details and many more.',
      link: 'https://shidonogo.netlify.app/home',
      gitLink: 'https://github.com/4Lai/Shidonogo',
    },
  ];
}
