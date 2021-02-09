import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotsComponent } from './jots.component';

describe('JotsComponent', () => {
  let component: JotsComponent;
  let fixture: ComponentFixture<JotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
