import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordosVopComponent } from './acordos-vop.component';

describe('AcordosVopComponent', () => {
  let component: AcordosVopComponent;
  let fixture: ComponentFixture<AcordosVopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordosVopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordosVopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
