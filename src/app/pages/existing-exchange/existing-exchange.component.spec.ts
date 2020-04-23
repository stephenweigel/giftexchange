import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingExchangeComponent } from './existing-exchange.component';

describe('ExistingExchangeComponent', () => {
  let component: ExistingExchangeComponent;
  let fixture: ComponentFixture<ExistingExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
