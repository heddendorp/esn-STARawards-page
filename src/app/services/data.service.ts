import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories: Observable<Category[]>;

  constructor(private http: HttpClient) {
    this.categories = http
      .get<Category[]>('/assets/data/categories.json')
      .pipe(share());
  }

  public getCategories(): Observable<Category[]> {
    return this.categories;
  }

  public getCategoryById(id: string): Observable<Category> {
    return this.categories.pipe(
      map((categories) => categories.find((c) => c.id === id))
    );
  }
}

export interface Category {
  id: string;
  title: string;
  public: boolean;
  first: Array<Entry>;
  second: Array<Entry>;
  third: Array<Entry>;
  honorable: Array<Entry>;
  noCard?: boolean;
}

interface Entry {
  project: string;
  organizer: string;
  type?: string;
  picture?: string;
  longText?: string;
}
