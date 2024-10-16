import { Test, TestingModule } from '@nestjs/testing';
import { HttpResourceService } from './http-resource.service';

describe('HttpResourceService', () => {
  let service: HttpResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpResourceService],
    }).compile();

    service = module.get<HttpResourceService>(HttpResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
