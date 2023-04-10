import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyswtComponent } from './myswt.component';

describe('MyswtComponent', () => {
  let component: MyswtComponent;
  let fixture: ComponentFixture<MyswtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyswtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyswtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
