import { Component } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.css']
})
export class OperatorElvisComponent {

  task: { description: string, responsible?: { name: string } } = {
    description: 'Task description'
  }

}
