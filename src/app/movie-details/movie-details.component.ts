import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  parametar:any='';
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    this.parametar=this.route.snapshot.paramMap.get('id');
  }
}
