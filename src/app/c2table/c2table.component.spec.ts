import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2tableComponent } from './c2table.component';

describe('C2tableComponent', () => {
  let component: C2tableComponent;
  let fixture: ComponentFixture<C2tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
