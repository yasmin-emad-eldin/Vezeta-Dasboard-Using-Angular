import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverchartComponent } from './hoverchart.component';

describe('HoverchartComponent', () => {
  let component: HoverchartComponent;
  let fixture: ComponentFixture<HoverchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
