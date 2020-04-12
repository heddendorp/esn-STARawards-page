import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'esn-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  countDownEnd = DateTime.fromISO('2020-05-10');

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('ESN STARawards');
    this.metaService.updateTag({
      name: 'og:title',
      content: 'ESN STARawards',
    });
  }
}
