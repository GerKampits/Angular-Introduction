import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: User[] = [
    {firstname: 'John', lastname: 'Doe', age:20},
    {firstname: 'Jane', lastname: 'Smith', age:19},
    {firstname: 'Joe', lastname: 'Scmoe', age:33},
    {firstname: 'Jane', lastname: 'Brown', age:34},

  ]

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }

}
