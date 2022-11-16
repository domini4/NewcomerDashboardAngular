import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6tableComponent } from './c6table.component';

describe('C6tableComponent', () => {
  let component: C6tableComponent;
  let fixture: ComponentFixture<C6tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C6tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C6tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
