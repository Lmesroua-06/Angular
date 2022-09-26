import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship'
import { ShipsServiceService } from '../ships-service.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Ship[] = [];
  subsribe: any;


  constructor(private shipsService: ShipsServiceService) { } //dependecy injection - constructor injection

  ngOnInit(): void {

    this.getShips();  //ships = this.shipsService
  }

  getShips(): void {

    this.shipsService
      .getShips()
      this.subsribe(((data: { results: Ship[]; })  => (this.ships = data.results)));
  }

}
