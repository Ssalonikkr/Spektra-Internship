import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdisplayComponent } from './pdisplay.component';

describe('PdisplayComponent', () => {
  let component: PdisplayComponent;
  let fixture: ComponentFixture<PdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
