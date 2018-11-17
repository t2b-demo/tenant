import { TestBed } from '@angular/core/testing';

import { DynamodbService } from './dynamodb.service';

describe('DynamodbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamodbService = TestBed.get(DynamodbService);
    expect(service).toBeTruthy();
  });
});
