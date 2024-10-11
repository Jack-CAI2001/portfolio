import { Component } from '@angular/core';
import {CdkCopyToClipboard, Clipboard} from '@angular/cdk/clipboard';
import {TooltipModule} from "primeng/tooltip";
import {InputTextModule} from "primeng/inputtext";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CdkCopyToClipboard,
    TooltipModule,
    InputTextModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = "caijack1403@gmail.com";
  location: string = "Paris, France";
  github: string = "https://github.com/Jack-CAI2001";
  linkedIn: string = "https://www.linkedin.com/in/jack-cai-30221b185/";
}
