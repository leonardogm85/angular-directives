import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.css']
})
export class DirectiveNgforComponent {

  courses: string[] = ['Angular', 'React', 'Vue'];

}
