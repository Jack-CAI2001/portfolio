import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routes} from "../../app.routes";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected readonly routes = routes.slice(0,-1);

  protected capitalizeFirstLetter(word: string = "") {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
