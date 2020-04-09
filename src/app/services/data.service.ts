import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories = [
    { title: 'STARlight', description: 'Best ESN Section' },
    { title: 'STARland', description: 'Best ESN Country' },
    { title: 'STARter', description: 'Best New ESN Section' },
    { title: 'STARlight', description: 'Best ESN Section' },
    { title: 'STARland', description: 'Best ESN Country' },
    { title: 'STARter', description: 'Best New ESN Section' },
    { title: 'STARlight', description: 'Best ESN Section' },
    { title: 'STARland', description: 'Best ESN Country' },
    { title: 'STARter', description: 'Best New ESN Section' },
    { title: 'STARlight', description: 'Best ESN Section' },
    { title: 'STARland', description: 'Best ESN Country' },
    { title: 'STARter', description: 'Best New ESN Section' },
    { title: 'STARlight', description: 'Best ESN Section' },
    { title: 'STARland', description: 'Best ESN Country' },
    { title: 'STARter', description: 'Best New ESN Section' },
  ];

  constructor() {}

  public getCategories() {
    return this.categories;
  }
}
