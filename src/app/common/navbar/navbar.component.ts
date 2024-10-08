import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routes} from "../../app.routes";
import {NgForOf, NgStyle} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem, MenuItemCommandEvent} from "primeng/api";
import {Button, ButtonDirective} from "primeng/button";
import {OverlayModule} from "primeng/overlay";
import {SidebarModule} from "primeng/sidebar";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf,
    TabMenuModule,
    ButtonDirective,
    Button,
    OverlayModule,
    NgStyle,
    SidebarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  routes: MenuItem[] | undefined;

  private capitalizeFirstLetter(word: string = "") {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  protected overlayVisible: boolean = false;

  toggleButtonState() {
    this.overlayVisible = !this.overlayVisible;
  }

  ngOnInit(): void {
    this.routes = routes.slice(0,-1).map(route => {
      return {
        label: this.capitalizeFirstLetter(route.path),
        routerLink: route.path,
        command: () => {
          this.toggleButtonState()
        }
      }
    })
  }
}
