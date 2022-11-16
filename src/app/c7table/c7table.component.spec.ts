import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C7tableComponent } from './c7table.component';

describe('C7tableComponent', () => {
  let component: C7tableComponent;
  let fixture: ComponentFixture<C7tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C7tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C7tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
