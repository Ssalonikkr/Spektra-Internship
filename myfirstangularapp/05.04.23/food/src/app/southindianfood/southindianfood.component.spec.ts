import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthindianfoodComponent } from './southindianfood.component';

describe('SouthindianfoodComponent', () => {
  let component: SouthindianfoodComponent;
  let fixture: ComponentFixture<SouthindianfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthindianfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthindianfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
