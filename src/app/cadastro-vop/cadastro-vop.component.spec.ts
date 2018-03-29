import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVopComponent } from './cadastro-vop.component';

describe('CadastroVopComponent', () => {
  let component: CadastroVopComponent;
  let fixture: ComponentFixture<CadastroVopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
