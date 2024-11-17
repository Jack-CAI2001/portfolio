import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {CardComponent, ExperienceCard} from "../../common/card/card.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf,
    CardModule,
    CarouselModule,
    NgOptimizedImage,
    CardComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  cards: ExperienceCard[] = [];
  ngOnInit(): void {
    this.cards = [
      {
        title: 'Turo',
        date: '2023/2024',
        company_logo: '/turo_logo.svg',
        position: 'Android developer',
        position_logo: '/android_logo.svg',
        description: '<ul><li>Clean architecture/Modular architecture</li><li>MVI architecture</li><li>Migration de xml à Compose</li><li>Ecriture de test unitaire</li></ul>',
      },
      {
        title: 'OuiCar',
        date: '2022/2023',
        company_logo: '/ouicar_logo.svg',
        position: 'Android developer',
        position_logo: '/android_logo.svg',
        description: '<ul><li>Architecture mvvm</li><li>XML</li><li>Participation à l’amélioration de l’UX</li><li>Participation à la création de fonctionnalité avec compose</li></ul>',
      }
    ];
  }
}
