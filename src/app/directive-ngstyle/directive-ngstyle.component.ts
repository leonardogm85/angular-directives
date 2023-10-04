import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.css']
})
export class DirectiveNgstyleComponent {

  active: boolean = false;
  fontSize: number = 12;

  onClick(): void {
    this.active = !this.active;
  }

}
