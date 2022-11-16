import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C9tableComponent } from './c9table.component';

describe('C9tableComponent', () => {
  let component: C9tableComponent;
  let fixture: ComponentFixture<C9tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C9tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C9tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
