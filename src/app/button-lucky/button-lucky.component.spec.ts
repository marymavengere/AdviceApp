import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLuckyComponent } from './button-lucky.component';

describe('ButtonLuckyComponent', () => {
  let component: ButtonLuckyComponent;
  let fixture: ComponentFixture<ButtonLuckyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLuckyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
