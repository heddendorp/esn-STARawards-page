import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'esn-winners-page',
  templateUrl: './winners-page.component.html',
  styleUrls: ['./winners-page.component.scss'],
})
export class WinnersPageComponent implements OnInit {
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
