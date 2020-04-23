import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingExchangeFormComponent } from './existing-exchange-form.component';

describe('ExistingExchangeFormComponent', () => {
  let component: ExistingExchangeFormComponent;
  let fixture: ComponentFixture<ExistingExchangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingExchangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
