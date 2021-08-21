import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotCreateComponent } from './jot-create.component';

describe('JotCreateComponent', () => {
  let component: JotCreateComponent;
  let fixture: ComponentFixture<JotCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
