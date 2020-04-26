import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurelComponent } from './laurel.component';

describe('LaurelComponent', () => {
  let component: LaurelComponent;
  let fixture: ComponentFixture<LaurelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaurelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaurelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
