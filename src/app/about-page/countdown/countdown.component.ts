import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, of, Subject, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'esn-countdown',
  template: `{{ timeRemaining$ | async }}`,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() end: DateTime;
  timeRemaining$: Observable<string>;
  private timer$: Observable<number>;
  private destroyed$ = new Subject();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer$ = timer(0, 1000);
    }
    if (isPlatformServer(this.platformId)) {
      this.timer$ = of(0);
    }
    this.timeRemaining$ = this.timer$.pipe(
      takeUntil(this.destroyed$),
      map(() =>
        this.end.diff(DateTime.local(), ['days', 'hours', 'minutes', 'seconds'])
      ),
      map(
        (diff) =>
          `${diff.days
            .toString()
            .padStart(2, '0')}:${diff.hours
            .toString()
            .padStart(2, '0')}:${diff.minutes
            .toString()
            .padStart(2, '0')}:${Math.round(diff.seconds)
            .toString()
            .padStart(2, '0')}`
      )
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }
}
