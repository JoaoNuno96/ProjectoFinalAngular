import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGameDetailsComponent } from './single-game-details.component';

describe('SingleGameDetailsComponent', () => {
  let component: SingleGameDetailsComponent;
  let fixture: ComponentFixture<SingleGameDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleGameDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
