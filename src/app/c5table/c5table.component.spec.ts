import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5tableComponent } from './c5table.component';

describe('C5tableComponent', () => {
  let component: C5tableComponent;
  let fixture: ComponentFixture<C5tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C5tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
