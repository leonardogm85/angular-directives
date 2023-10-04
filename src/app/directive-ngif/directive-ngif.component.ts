import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent {

  courses: string[] = ['Angular'];

  showCourses: boolean = false;

  onShowCourses(): void {
    this.showCourses = !this.showCourses;
  }

}
