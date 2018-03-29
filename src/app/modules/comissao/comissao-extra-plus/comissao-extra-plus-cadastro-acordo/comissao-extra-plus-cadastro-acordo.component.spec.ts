import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissaoExtraPlusCadastroAcordoComponent } from './comissao-extra-plus-cadastro-acordo.component';

describe('ComissaoExtraPlusCadastroAcordoComponent', () => {
  let component: ComissaoExtraPlusCadastroAcordoComponent;
  let fixture: ComponentFixture<ComissaoExtraPlusCadastroAcordoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComissaoExtraPlusCadastroAcordoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissaoExtraPlusCadastroAcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
