import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthindianfoodComponent } from './northindianfood.component';

describe('NorthindianfoodComponent', () => {
  let component: NorthindianfoodComponent;
  let fixture: ComponentFixture<NorthindianfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthindianfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthindianfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
