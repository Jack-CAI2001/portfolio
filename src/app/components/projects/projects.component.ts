import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {PanelModule} from "primeng/panel";
import {CardComponent, ProjectCard} from "../../common/card/card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardModule,
    NgForOf,
    NgOptimizedImage,
    PrimeTemplate,
    PanelModule,
    CardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  cards: ProjectCard[] = [];
  ngOnInit(): void {
    this.cards = [
      {
        title: 'Portfolio',
        date: '2024',
        description: '',
        stack_logo: ["/languageIcon/angular_logo.svg","/languageIcon/typescript_logo.svg"],
        stack_logo_tooltip: ["Angular","Typescript"],
      },
      {
        title: 'Student Rating App',
        date: '2023/2024',
        description: '' +
          '<div>It\'s a university project centered around Firebase, developed by a team of three. It\' about rate and review books.</div>'+
          '<ul><li>Authentication</li><li>Book rating</li><li>Viewing average and individual ratings</li></ul>',
        stack_logo: ["/languageIcon/firebase_logo.svg","/languageIcon/typescript_logo.svg","/languageIcon/html_logo.svg"],
        stack_logo_tooltip: ["Firebase", "Typescript", "Html"],
      },
      {
        title: 'BE-EAT TODO',
        date: '2022/2023',
        description: '' +
          '<div>BE-EAT is a food delivery management application that facilitates communication between three main actors: customers, restaurants, and delivery personnel, developed by a team of four.</div>'+
          '<ul>' +
          '<li>Customers can filter restaurants, customize their orders, make online payments, track deliveries in real-time, and view their order history or saved favorites.</li>' +
          '<li>Restaurants receive orders, can accept or reject them, manage their operating hours, and update their menu (dishes and meal options).</li><li>Delivery personnel scan a QR code to take charge of an order, deliver it, and provide an estimated delivery time.</li></ul>',
        stack_logo: ["/languageIcon/java_logo.svg","/languageIcon/typescript_logo.svg"],
        stack_logo_tooltip: [],
      },
      {
        title: 'MyCook',
        date: '2022/2023',
        description: '' +
          '<div>It\'s a university project centered around food, developed by a team of two. The project utilizes the public API, "TheMealDB".</div>'+
          '<ul><li>Authentication</li><li>Favorites</li><li>Cart</li><li>Filter by ingredient/Search Bar</li></ul>',
        stack_logo: ["/languageIcon/angular_logo.svg","/languageIcon/typescript_logo.svg","/languageIcon/html_logo.svg","/languageIcon/css3_logo.svg"],
        stack_logo_tooltip: ["Angular","Typescript","Html","Css"],
      },
      {
        title: 'Pokemaster',
        date: '2022',
        description: '' +
          '<div>It\'s a university project on the theme of Pokemon, carried out by a team of three.</div>'+
          '<ul>' +
          '<li>Authentication</li>' +
          '<li>PokeLoto: you spend X coins to receive a randomly selected pokemon.</li>' +
          '<li>Training: Select the Pokemon to train for X amount of time to earn X experience points.</li>' +
          '<li>Capture</li>' +
          '<li>Pokedex</li>' +
          '<li>Auction House / Buy / Sell / History</li>' +
          '</ul>',
        stack_logo: ["/languageIcon/php_logo.svg","/languageIcon/symfony_logo.svg","/languageIcon/tailwind_logo.svg","/languageIcon/mysql_logo.svg"],
        stack_logo_tooltip: ["Php","Symfony","Tailwind","MySql"],
      }
    ];
  }
}
