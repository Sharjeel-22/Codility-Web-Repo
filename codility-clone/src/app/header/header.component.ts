import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listNavbar=["Plateform","Solutions","Resources","Our Customers"];

  constructor(){}

  isRotated: boolean = false;

  rotateIcon(shouldRotate: boolean) {
    this.isRotated = shouldRotate;
  }
}
