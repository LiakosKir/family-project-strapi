import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeorgeComponent } from './user-george.component';

describe('UserGeorgeComponent', () => {
  let component: UserGeorgeComponent;
  let fixture: ComponentFixture<UserGeorgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGeorgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
