import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisContainerComponent } from './emojis-container.component';

describe('EmojisContainerComponent', () => {
  let component: EmojisContainerComponent;
  let fixture: ComponentFixture<EmojisContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojisContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
