import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];
