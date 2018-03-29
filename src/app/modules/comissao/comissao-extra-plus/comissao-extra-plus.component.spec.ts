import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissaoExtraPlusComponent } from './comissao-extra-plus.component';

describe('ComissaoExtraPlusComponent', () => {
  let component: ComissaoExtraPlusComponent;
  let fixture: ComponentFixture<ComissaoExtraPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComissaoExtraPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissaoExtraPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
