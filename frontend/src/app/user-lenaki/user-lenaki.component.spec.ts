import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLenakiComponent } from './user-lenaki.component';

describe('UserLenakiComponent', () => {
  let component: UserLenakiComponent;
  let fixture: ComponentFixture<UserLenakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLenakiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLenakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
