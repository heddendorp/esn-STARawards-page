import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Winners2PageComponent } from './winners2-page.component';

describe('Winners2PageComponent', () => {
  let component: Winners2PageComponent;
  let fixture: ComponentFixture<Winners2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Winners2PageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Winners2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
