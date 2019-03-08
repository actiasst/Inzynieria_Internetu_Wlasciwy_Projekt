import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  public month: string;
  public year: number;
  tiles: Tile[] = [];

  Constructor() {
  }

  calendarOnClick(number): void {
    console.log(number);
  }

  ngOnInit() {
    this.month = "Styczeń";
    this.year = 2019;
    var tmp;
    for (var i: number = 1; i < 32; i++) {
      tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
      this.tiles.push(tmp);
    }
  }
}
