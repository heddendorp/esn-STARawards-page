import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../services/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'esn-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.data.category;
    this.titleService.setTitle(`${this.category.title} 2020`);
    this.metaService.updateTag({
      name: 'og:title',
      content: `${this.category.title} 2020`,
    });
  }
}
