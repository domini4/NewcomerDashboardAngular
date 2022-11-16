import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4tableComponent } from './c4table.component';

describe('C4tableComponent', () => {
  let component: C4tableComponent;
  let fixture: ComponentFixture<C4tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C4tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
