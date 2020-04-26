import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'esn-laurel',
  templateUrl: './laurel.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styles: [],
})
export class LaurelComponent {
  @Input() place: 'gold' | 'silver' | 'bronze';
  @Input() size = 40;
  @HostBinding('style.height') get height() {
    return this.size + 'px';
  }

  constructor() {}
}
