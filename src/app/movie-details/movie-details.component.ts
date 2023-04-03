import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  parametar: any = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.parametar = this.route.snapshot.paramMap.get('id');
  }
}
