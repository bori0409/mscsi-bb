import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsContentComponent } from './meals-content.component';

describe('MealsContentComponent', () => {
  let component: MealsContentComponent;
  let fixture: ComponentFixture<MealsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
