import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'esn-winners-page',
  templateUrl: './winners-page.component.html',
  styleUrls: ['./winners-page.component.scss'],
})
export class WinnersPageComponent implements OnInit {
  categories$: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.categories$ = of(this.dataService.getCategories());
  }
}
