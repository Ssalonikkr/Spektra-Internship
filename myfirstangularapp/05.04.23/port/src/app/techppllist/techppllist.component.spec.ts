import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechppllistComponent } from './techppllist.component';

describe('TechppllistComponent', () => {
  let component: TechppllistComponent;
  let fixture: ComponentFixture<TechppllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechppllistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechppllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
