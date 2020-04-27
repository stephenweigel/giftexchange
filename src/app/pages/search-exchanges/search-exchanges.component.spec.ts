import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExchangesComponent } from './search-exchanges.component';

describe('SearchExchangesComponent', () => {
  let component: SearchExchangesComponent;
  let fixture: ComponentFixture<SearchExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
