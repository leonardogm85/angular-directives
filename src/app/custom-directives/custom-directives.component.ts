import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent {

  showCourses: boolean = false;

  onShowCourses(): void {
    this.showCourses = !this.showCourses;
  }

}
