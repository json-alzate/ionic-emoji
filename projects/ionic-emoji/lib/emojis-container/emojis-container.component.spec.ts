import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisCOntainerComponent } from './emojis-container.component';

describe('EmojisCOntainerComponent', () => {
  let component: EmojisCOntainerComponent;
  let fixture: ComponentFixture<EmojisCOntainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojisCOntainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisCOntainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
