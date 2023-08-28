import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {
@Input() items:string[]=[];
}
