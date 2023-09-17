import { Component } from '@angular/core';
import { HeaderDataService } from '../../services/local-data/header-data.service';
import { HeaderData } from '../../interfaces/header-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  headerElements: HeaderData[] = this.headerDataService.navBarElements;
  isActive: boolean = false;
  touched: boolean = false;
  windowWidth: number = 0;


  constructor(private headerDataService: HeaderDataService) {}

  onClick() {
    this.isActive = !this.isActive;
    this.touched = true;
  }
}
