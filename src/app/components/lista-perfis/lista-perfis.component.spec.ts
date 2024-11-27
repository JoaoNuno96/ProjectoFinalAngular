import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPerfisComponent } from './lista-perfis.component';

describe('ListaPerfisComponent', () => {
  let component: ListaPerfisComponent;
  let fixture: ComponentFixture<ListaPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPerfisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
