import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicEmojiComponent } from './ionic-emoji.component';

describe('IonicEmojiComponent', () => {
  let component: IonicEmojiComponent;
  let fixture: ComponentFixture<IonicEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicEmojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
