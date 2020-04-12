import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'esn-stars-background',
  template: `<canvas #canvasElement></canvas>`,
  styles: [
    `
      canvas {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class StarsBackgroundComponent implements AfterViewInit {
  @ViewChild('canvasElement') canvas: ElementRef<HTMLCanvasElement>;
  width: number;
  height: number;
  context: CanvasRenderingContext2D;
  elements: Square[] = [];
  runAnimation = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.height = this.canvas.nativeElement.scrollHeight;
      this.width = this.canvas.nativeElement.scrollWidth;
      this.canvas.nativeElement.width = this.width;
      this.canvas.nativeElement.height = this.height;
      this.context = this.canvas.nativeElement.getContext('2d');
      for (let x = 0; x < this.width; x++) {
        const c = new Square();
        this.init(c, true);
        this.elements.push(c);
      }
      this.animate();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.height = this.canvas.nativeElement.scrollHeight;
      this.width = this.canvas.nativeElement.scrollWidth;
      this.canvas.nativeElement.width = this.width;
      this.canvas.nativeElement.height = this.height;
      if (this.elements.length > this.width) {
        this.elements = this.elements.slice(0, this.width);
      } else {
        for (let x = 0; x < this.width - this.elements.length; x++) {
          const c = new Square();
          this.init(c, true);
          this.elements.push(c);
        }
      }
    }
  }

  /*@HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.scrollTop > this.height) {
      this.runAnimation = false;
    } else {
      this.runAnimation = true;
    }
  }*/

  init(el: Square, first = false) {
    const goesLeft = Math.random() > 0.5;
    const speedFactor = (this.width - 300) / this.width;
    el.decay = (1 - speedFactor) / 1000;
    el.pos.x = goesLeft ? this.width + 5 : -5;
    el.pos.y = this.height * Math.random();
    el.alpha = 0.7 + Math.random() * 0.3;
    el.scale = 0.5;
    if (el.pos.y < 80) {
      el.alpha = el.alpha * 0.7;
    }
    el.velocity =
      ((goesLeft ? Math.random() : -Math.random()) * speedFactor) / 2;
    // if (first) {
    const displacement = (first ? 0.5 : 0.4) * Math.random();
    if (goesLeft) {
      el.pos.x = this.width - this.width * displacement;
    } else {
      el.pos.x = this.width * displacement;
    }
    el.alpha = el.alpha * (1 - displacement * 2);
    // }
  }

  animate() {
    if (this.runAnimation) {
      this.context.clearRect(0, 0, this.width, this.height);
      this.elements
        .filter((el) => el.alpha <= 0 || el.pos.y >= this.height)
        .forEach((el) => this.init(el));
      this.elements.forEach((el) => el.draw(this.context));
    }
    requestAnimationFrame(() => this.animate());
  }
}

class Square {
  pos = { x: null, y: null };
  alpha: number;
  scale: number;
  velocity: number;
  decay: number;

  draw(ctx: CanvasRenderingContext2D) {
    this.pos.x -= this.velocity;
    this.pos.y += 1 - this.alpha;
    this.alpha -= this.decay;
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.scale * 10, this.scale * 10);
    ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
    ctx.fill();
  }
}
