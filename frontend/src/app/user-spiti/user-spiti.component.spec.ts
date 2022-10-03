import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpitiComponent } from './user-spiti.component';

describe('UserSpitiComponent', () => {
  let component: UserSpitiComponent;
  let fixture: ComponentFixture<UserSpitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpitiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSpitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
