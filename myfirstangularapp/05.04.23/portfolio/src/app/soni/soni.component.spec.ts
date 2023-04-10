import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoniComponent } from './soni.component';

describe('SoniComponent', () => {
  let component: SoniComponent;
  let fixture: ComponentFixture<SoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
