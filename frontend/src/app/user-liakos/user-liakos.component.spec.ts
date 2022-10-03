import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiakosComponent } from './user-liakos.component';

describe('UserLiakosComponent', () => {
  let component: UserLiakosComponent;
  let fixture: ComponentFixture<UserLiakosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLiakosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLiakosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
