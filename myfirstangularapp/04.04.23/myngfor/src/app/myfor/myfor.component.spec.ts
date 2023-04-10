import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyforComponent } from './myfor.component';

describe('MyforComponent', () => {
  let component: MyforComponent;
  let fixture: ComponentFixture<MyforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
