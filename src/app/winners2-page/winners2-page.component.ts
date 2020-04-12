import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'esn-winners2-page',
  templateUrl: './winners2-page.component.html',
  styleUrls: ['./winners2-page.component.scss'],
})
export class Winners2PageComponent implements OnInit {
  categories$: Observable<any[]>;

  constructor(
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.categories$ = of(this.dataService.getCategories());
    this.titleService.setTitle('STARawards 2020');
    this.metaService.updateTag({
      name: 'og:title',
      content: 'STARawards 2020',
    });
  }
}
