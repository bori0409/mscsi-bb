import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesContentComponent } from './groceries-content.component';

describe('GroceriesContentComponent', () => {
  let component: GroceriesContentComponent;
  let fixture: ComponentFixture<GroceriesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceriesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
