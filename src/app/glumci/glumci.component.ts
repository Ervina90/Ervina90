import { Component } from '@angular/core';
import { IGlumci } from './glumci';

@Component({
  selector: 'app-glumci',
  templateUrl: './glumci.component.html',
  styleUrls: ['./glumci.component.css'],
})
export class GlumciComponent {
  actor: IGlumci[] = [
    {
      FullName: 'Brad Pit',
      BirthYear: 1980,
      ImgUrl: 'assets/img/brad.jpg',
    },
    {
      FullName: 'Angelina Yolie',
      BirthYear: 1985,
      ImgUrl: 'assets/img/Angelina.jpg',
    },
    {
      FullName: 'Nicol Kidman',
      BirthYear: 1979,
      ImgUrl: 'assets/img/nikol.jpg',
    },
  ];
}
