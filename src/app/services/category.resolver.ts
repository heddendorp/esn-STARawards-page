import { Category, DataService } from './data.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryResolver implements Resolve<Category> {
  constructor(private service: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category> | Promise<Category> | Category {
    return this.service.getCategoryById(route.paramMap.get('category'));
  }
}
