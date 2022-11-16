import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C8tableComponent } from './c8table.component';

describe('C8tableComponent', () => {
  let component: C8tableComponent;
  let fixture: ComponentFixture<C8tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C8tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C8tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
