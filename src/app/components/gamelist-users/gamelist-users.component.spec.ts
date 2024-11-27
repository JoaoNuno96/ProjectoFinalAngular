import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelistUsersComponent } from './gamelist-users.component';

describe('GamelistUsersComponent', () => {
  let component: GamelistUsersComponent;
  let fixture: ComponentFixture<GamelistUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamelistUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamelistUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
