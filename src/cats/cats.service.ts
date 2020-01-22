import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Cat } from "./cats.entity";
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>
  ) {}

  async create(body: Cat): Promise<Cat> {
    const cat = await this.catRepository.create(body);
    const results = await this.catRepository.save(cat);

    return results;
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }
}
