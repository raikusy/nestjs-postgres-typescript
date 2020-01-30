import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cat } from './cats.entity';
import { CreateCatDto } from './dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>
  ) {}

  async create(body: CreateCatDto): Promise<Cat> {
    const cat = await this.catRepository.create(body);
    const results = await this.catRepository.save(cat);

    return results;
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  findOne(id): Promise<Cat> {
    // return this.catRepository.findOneOrFail(id);
    return this.catRepository.findOneOrFail(id);
  }
}
