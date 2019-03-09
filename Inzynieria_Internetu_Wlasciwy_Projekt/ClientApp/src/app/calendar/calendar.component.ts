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
  public tiles: Tile[] = [];
  public weekdays: string[] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  public daysInYear: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  public days: number = 0;
  public emptyDays: Tile[] = [];
  public current: number = 0;
  public difference: number = 0;
  Constructor() {
  }

  calendarOnClick(day,month,year): void {
    console.log(day+" "+month+" "+year);
  }

  ngOnInit() {
    var today = new Date();
    this.currentMonth = this.month[today.getMonth()];
    this.currentYear = today.getFullYear();

    for (var i = 0; i < today.getMonth(); i++)
      this.days += this.daysInYear[i];

    if (today.getFullYear() % 4 == 0 && today.getMonth() > 1)
      this.days++;

    this.difference = this.currentYear - 2019;
    for (var i: number = 2019; i < this.currentYear + 1; i++)
      if (i % 4 == 1)
        this.difference++;
    if (this.currentYear % 4 == 0 && (today.getMonth() + this.current) % 12 > 1)
      this.difference++;

    this.days = ((this.days % 7) + 1 + this.difference) % 7;

    var tmp;
    for (var i: number = 0; i < this.days; i++) {
      tmp = { text: "", cols: 1, rows: 1, color: 'lightblue' };
      this.emptyDays.push(tmp);
    }

    if (this.currentYear % 4 == 0 && today.getMonth() == 1 ){
      for (var i: number = 1; i < 30; i++) {
        tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
        this.tiles.push(tmp);
      }
    }
    else
      for (var i: number = 1; i < this.daysInYear[today.getMonth()] + 1; i++) {
        tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
        this.tiles.push(tmp);
      }
  }

  monthLeft() {
    console.log("xD");
    this.current--;
    var today = new Date();
    if (((today.getMonth() + this.current)+12) % 12 == 11)
      this.currentYear--;
    this.currentMonth = this.month[(today.getMonth() + this.current + 12) % 12];

    var tmp;
    this.emptyDays = [];
    this.days = 0;
    for (var i = 0; i < (today.getMonth() + this.current + 12) % 12; i++)
      this.days += this.daysInYear[i];

    this.difference = this.currentYear - 2019;
    for (var i: number = 2019; i < this.currentYear + 1; i++)
      if (i % 4 == 1)
        this.difference++;
    if (this.currentYear % 4 == 0 && (today.getMonth() + this.current) % 12 > 1)
      this.difference++;

    this.days = (this.days % 7 + 1 + this.difference) % 7;

    for (var i: number = 0; i < this.days; i++) {
      tmp = { text: "", cols: 1, rows: 1, color: 'lightblue' };
      this.emptyDays.push(tmp);
    }

    this.tiles = [];
    if (this.currentYear % 4 == 0 && (today.getMonth() + this.current) % 12 == 1) {
      for (var i: number = 1; i < 30; i++) {
        tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
        this.tiles.push(tmp);
      }
    }
    else
      for (var i: number = 1; i < this.daysInYear[(today.getMonth() + this.current) % 12] + 1; i++) {
        tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
        this.tiles.push(tmp);
      }
  }

  monthRight() {
    this.current++;
    var today = new Date();
    if ((today.getMonth() + this.current) % 12 == 0)
      this.currentYear++;
    this.currentMonth = this.month[(today.getMonth() + this.current) % 12];

    var tmp;
    this.emptyDays = [];
    this.days = 0;
    for (var i = 0; i < (today.getMonth() + this.current) % 12; i++)
      this.days += this.daysInYear[i];

    this.difference = this.currentYear - 2019;
    for (var i: number = 2019; i < this.currentYear + 1; i++)
      if (i % 4 == 1)
        this.difference++;
    if (this.currentYear % 4 == 0 && (today.getMonth() + this.current) % 12 > 1)
      this.difference++;

    this.days = (this.days % 7 + 1 + this.difference) % 7;

    for (var i: number = 0; i < this.days; i++) {
      tmp = { text: "", cols: 1, rows: 1, color: 'lightblue' };
      this.emptyDays.push(tmp);
    }

    this.tiles = [];
    if (this.currentYear % 4 == 0 && (today.getMonth() + this.current) % 12 == 1) {
      for (var i: number = 1; i < 30; i++) {
        tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
        this.tiles.push(tmp);
      }
    }
    else
      for (var i: number = 1; i < this.daysInYear[(today.getMonth() + this.current) % 12] + 1; i++) {
        tmp = { text: i.toString(), cols: 1, rows: 1, color: 'lightblue' };
        this.tiles.push(tmp);
      }
  }
}
