import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { Meta, Title } from '@angular/platform-browser';
import {
  animate,
  AnimationEvent,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'esn-winners2-page',
  templateUrl: './winners2-page.component.html',
  styleUrls: ['./winners2-page.component.scss'],
  animations: [
    trigger('expandAnimation', [
      transition(':enter', [
        style({ height: 0, 'margin-top': -40, 'margin-bottom': -40 }),
        animate(
          '250ms',
          style({ height: '*', 'margin-top': 0, 'margin-bottom': 0 })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms',
          style({ height: 0, 'margin-top': -40, 'margin-bottom': -40 })
        ),
      ]),
    ]),
  ],
})
export class Winners2PageComponent implements OnInit {
  categories$: Observable<any[]>;
  entryVisible$ = new BehaviorSubject(false);

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

  onAnimationEvent(event: AnimationEvent) {
    if (this.entryVisible$.value) {
      event.element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleEntry() {
    this.entryVisible$.next(!this.entryVisible$.value);
  }
}
