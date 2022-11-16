import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3tableComponent } from './c3table.component';

describe('C3tableComponent', () => {
  let component: C3tableComponent;
  let fixture: ComponentFixture<C3tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
