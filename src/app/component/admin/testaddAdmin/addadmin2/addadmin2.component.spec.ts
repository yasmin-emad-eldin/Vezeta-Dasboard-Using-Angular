import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addadmin2Component } from './addadmin2.component';

describe('Addadmin2Component', () => {
  let component: Addadmin2Component;
  let fixture: ComponentFixture<Addadmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addadmin2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addadmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
