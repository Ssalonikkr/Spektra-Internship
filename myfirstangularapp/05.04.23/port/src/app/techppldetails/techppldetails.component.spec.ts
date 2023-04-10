import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechppldetailsComponent } from './techppldetails.component';

describe('TechppldetailsComponent', () => {
  let component: TechppldetailsComponent;
  let fixture: ComponentFixture<TechppldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechppldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechppldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
