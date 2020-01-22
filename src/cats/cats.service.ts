import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: "Raiku",
      age: 12,
      breed: "Deshi"
    }
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
