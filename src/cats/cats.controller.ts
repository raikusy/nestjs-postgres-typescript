import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";

import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Req() request: Request): Promise<Cat> {
    return this.catsService.create(request.body);
  }
}
