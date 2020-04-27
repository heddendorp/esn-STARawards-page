import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../services/data.service';

@Component({
  selector: 'esn-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.data.category;
  }
}
