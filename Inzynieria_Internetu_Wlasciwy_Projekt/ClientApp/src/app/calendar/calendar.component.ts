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
  public month: string[] = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
  public currentYear: number;
  public currentMonth: string;
  tiles: Tile[] = [];
  weekdays: string[] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  Constructor() {
  }

  calendarOnClick(number): void {
    console.log(number);
  }

  ngOnInit() {
    var today = new Date();
    this.currentMonth = this.month[today.getMonth()];
    this.currentYear = today.getFullYear();
    var tmp;
    
    for (var i: number = 1; i < 32; i++) {
      tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
      this.tiles.push(tmp);
    }
  }
}
