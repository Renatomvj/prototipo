import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissaoExtraPlusParametroComponent } from './comissao-extra-plus-parametro.component';

describe('ComissaoExtraPlusParametroComponent', () => {
  let component: ComissaoExtraPlusParametroComponent;
  let fixture: ComponentFixture<ComissaoExtraPlusParametroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComissaoExtraPlusParametroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissaoExtraPlusParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
