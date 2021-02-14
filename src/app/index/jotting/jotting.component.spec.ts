import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JottingComponent } from './jotting.component';

describe('JottingComponent', () => {
  let component: JottingComponent;
  let fixture: ComponentFixture<JottingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JottingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
