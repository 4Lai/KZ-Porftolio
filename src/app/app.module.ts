import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    NavBarComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
