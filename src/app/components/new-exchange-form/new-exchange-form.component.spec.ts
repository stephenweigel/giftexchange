import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExchangeFormComponent } from './new-exchange-form.component';

describe('NamesFormComponent', () => {
  let component: NewExchangeFormComponent;
  let fixture: ComponentFixture<NewExchangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExchangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
