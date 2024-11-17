import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardModule,
    NgForOf,
    NgOptimizedImage,
    PrimeTemplate,
    NgIf,
    TooltipModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Card | ExperienceCard | ProjectCard;

  isExperienceCard(card: Card): card is ExperienceCard {
    return (card as ExperienceCard).position !== undefined;
  }

  isProjectCard(card: Card): card is ProjectCard {
    return (card as ProjectCard).stack_logo !== undefined;
  }

}

export interface Card {
  title: string;
  date: string;
  description: string;
}

export interface ExperienceCard extends Card {
  position: string;
  company_logo: string;
  position_logo: string;
}

export interface ProjectCard extends Card {
  stack_logo: string[],
  stack_logo_tooltip: string [],
  github_link?: string
}
