import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTileComponent } from './leaderboard-tile.component';

describe('LeaderboardTileComponent', () => {
  let component: LeaderboardTileComponent;
  let fixture: ComponentFixture<LeaderboardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderboardTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
