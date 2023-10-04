import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngclass',
  templateUrl: './directive-ngclass.component.html',
  styleUrls: ['./directive-ngclass.component.css']
})
export class DirectiveNgclassComponent {

  myFavorite: boolean = true;

  onClick(): void {
    this.myFavorite = !this.myFavorite;
  }

}
