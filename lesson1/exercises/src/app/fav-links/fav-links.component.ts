import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://developer.mozilla.org/en-US/','https://www.w3schools.com/','https://stackoverflow.com/'];
  constructor() { }

  ngOnInit(): void {
  }

}
