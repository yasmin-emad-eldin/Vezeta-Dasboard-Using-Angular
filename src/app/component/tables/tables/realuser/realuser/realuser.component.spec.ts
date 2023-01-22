import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealuserComponent } from './realuser.component';

describe('RealuserComponent', () => {
  let component: RealuserComponent;
  let fixture: ComponentFixture<RealuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
