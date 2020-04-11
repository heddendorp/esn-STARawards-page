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
export class WinnersPageComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundCanvas') backgroundCanvas: ElementRef<
    HTMLCanvasElement
  >;
  context: CanvasRenderingContext2D;
  circles = [];
  height;
  width;

  categories$: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.categories$ = of(this.dataService.getCategories());
  }

  ngAfterViewInit(): void {
    this.context = this.backgroundCanvas.nativeElement.getContext('2d');
    this.width = this.backgroundCanvas.nativeElement.scrollWidth;
    this.height = this.backgroundCanvas.nativeElement.scrollHeight;
    this.backgroundCanvas.nativeElement.height = this.height;
    this.backgroundCanvas.nativeElement.width = this.width;
    console.log(this.backgroundCanvas);
    console.log(this.width);
    for (let x = 0; x < this.width * 0.5; x++) {
      const c = new Square(this.width, this.height, this.context);
      this.circles.push(c);
    }
    this.animate();
  }

  animate() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (const i in this.circles) {
      this.circles[i].draw();
    }
    requestAnimationFrame(() => this.animate());
  }
}

class Square {
  pos = { x: null, y: null };
  alpha: number;
  scale: number;
  velocity: number;

  constructor(
    private canvasWidth: number,
    private canvasHeight: number,
    private ctx: CanvasRenderingContext2D
  ) {
    this.init();
  }

  private init() {
    const goesLeft = Math.random() > 0.5;
    this.pos.x = goesLeft ? this.canvasWidth : 0;
    this.pos.y = this.canvasHeight * Math.random();
    this.alpha = 0.7 + Math.random() * 0.3;
    this.scale = 0.3 + Math.random() * 0.3;
    this.velocity = (goesLeft ? Math.random() : -Math.random()) * 0.5;
  }

  draw() {
    if (this.alpha <= 0 || this.pos.y > this.canvasHeight) {
      this.init();
    }
    this.pos.x -= this.velocity;
    this.pos.y += 1 - this.alpha;
    this.alpha -= 0.001;
    this.ctx.beginPath();
    this.ctx.rect(this.pos.x, this.pos.y, this.scale * 10, this.scale * 10);
    this.ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
    this.ctx.fill();
  }
}
