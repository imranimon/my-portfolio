import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({opacity: 0})),
      state('visible', style({opacity: 1})),
      transition('hidden => visible', animate('500ms'))
    ])
  ]
})
export class AppComponent {
  // Split the text
  preNameText = "I'm ";
  name = "Md Imran Hossain Imon";
  postNameText = ", holding a senior position in software development. With a seasoned background in IT, I pride myself on my organizational skills and ability to communicate effectively. My passion lies in pursuing excellence and fostering continuous growth in the ever-evolving tech landscape.";

  chars: string[] = (this.preNameText + this.name + this.postNameText).split("");
  displayedText: string = "";
  index = 0;

  currentYear: number = new Date().getFullYear();

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;

  constructor() {
    this.addChar();
  }

  addChar() {
    if (this.index < this.chars.length) {
      this.displayedText += this.chars[this.index];
      this.index++;
      setTimeout(() => {
        this.addChar();
      }, 70);
    }
  }
}
