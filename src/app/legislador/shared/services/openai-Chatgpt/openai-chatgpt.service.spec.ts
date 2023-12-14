import { TestBed } from '@angular/core/testing';

import { OpenaiChatgptService } from './openai-chatgpt.service';

describe('OpenaiChatgptService', () => {
  let service: OpenaiChatgptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenaiChatgptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
