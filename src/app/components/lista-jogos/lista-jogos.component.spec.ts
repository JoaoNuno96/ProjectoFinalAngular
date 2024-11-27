import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJogosComponent } from './lista-jogos.component';

describe('ListaJogosComponent', () => {
  let component: ListaJogosComponent;
  let fixture: ComponentFixture<ListaJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
