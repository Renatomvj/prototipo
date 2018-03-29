import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissaoExtraPlusAcordosComponent } from './comissao-extra-plus-acordos.component';

describe('ComissaoExtraPlusAcordosComponent', () => {
  let component: ComissaoExtraPlusAcordosComponent;
  let fixture: ComponentFixture<ComissaoExtraPlusAcordosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComissaoExtraPlusAcordosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissaoExtraPlusAcordosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
