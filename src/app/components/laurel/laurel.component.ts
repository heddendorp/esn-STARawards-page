import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'esn-laurel',
  template: `<img
    src="/assets/images/{{ place }}.svg"
    alt="{{ place }}"
    height="100%"
  />`,
  styles: [],
})
export class LaurelComponent {
  @Input() place: 'gold' | 'silver' | 'bronze';
  @Input() size = 40;
  @HostBinding('style.height') get height() {
    return this.size + 'px';
  }
}
