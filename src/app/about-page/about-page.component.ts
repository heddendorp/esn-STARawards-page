import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'esn-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  countDownEnd = DateTime.fromISO('2020-05-10');

  constructor() {}

  ngOnInit(): void {}
}
