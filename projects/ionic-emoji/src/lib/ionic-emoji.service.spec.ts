import { TestBed } from '@angular/core/testing';

import { IonicEmojiService } from './ionic-emoji.service';

describe('IonicEmojiService', () => {
  let service: IonicEmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicEmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
