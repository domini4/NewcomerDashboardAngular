import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1tableComponent } from './c1table.component';

describe('C1tableComponent', () => {
  let component: C1tableComponent;
  let fixture: ComponentFixture<C1tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
