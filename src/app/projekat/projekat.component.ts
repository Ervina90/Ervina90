import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';

@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css'],
})
export class ProjekatComponent implements OnInit {
  Sadrzaj: IMovie[] = [
    {
      id: 1,
      Naziv: 'Batman',
      Godina: 2022,
      Zanr: 'Action/Horror',
      Trajanje: 176,
      Rating: 7.8,
      Opis: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city s hidden corruption and question his family s involvement.',
      Poster: 'assets/img/batman.jpg',
      showDescription: true,
    },
    {
      id: 2,
      Naziv: 'Thor:Love and war',
      Godina: 2023,
      Zanr: 'Action/Adventure',
      Trajanje: 120,
      Rating: 8.8,
      Opis: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city s hidden corruption and question his family s involvement.',
      Poster: 'assets/img/thor.jpg',
      showDescription: true,
    },
    {
      id: 3,
      Naziv: 'The Northman',
      Godina: 2023,
      Zanr: 'Adventure',
      Trajanje: 130,
      Rating: 7.2,
      Opis: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city s hidden corruption and question his family s involvement.',
      Poster: 'assets/img/northman.jpg',
      showDescription: true,
    },
  ];
  showOpis: boolean = true;
  toggleOpis() {
    this.showOpis = !this.showOpis;
  }

  toggleDiscription(id: number) {
    this.showOpis = !this.showOpis;
  }

  toggleDescriptionProduct(id: number) {
    for (var i = 0; i < this.Sadrzaj.length; i++) {
      if (this.Sadrzaj[i].id == id) {
        this.Sadrzaj[i].showDescription = !this.Sadrzaj[i].showDescription;
      }
    }
  }

  ngOnInit(): void {
    console.log('prikazuje se prvo');
  }

  toggleImage() {
    this.showOpis = !this.showOpis;
  }
}
