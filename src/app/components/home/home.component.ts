import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import Typewriter from 't-writer.js';
import {AsyncPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {Button} from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    Button,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected downloadCV() {
    const pdfUrl = '/CAIJack.pdf'
    const pdfName = "CV_Jack_CAI.pdf"
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    link.click();
  }
  @ViewChild('tw') typewriterElement!: ElementRef;

  constructor() {
    afterNextRender(() => {
      const target = this.typewriterElement.nativeElement;

      const writer = new Typewriter(target, {
        typeColor: '#9918EE',
        cursorColor: '#9918EE',
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 80,
      })

      writer
        .strings(
          1500,
          "Android Developer",
          "Fullstack Developer",
          "Backend Developer"
        )
        .start()
    })
  }
}

