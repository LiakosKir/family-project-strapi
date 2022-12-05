import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteConfigComponent } from './note-config.component';

describe('NoteConfigComponent', () => {
  let component: NoteConfigComponent;
  let fixture: ComponentFixture<NoteConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
