import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpException,
  HttpStatus,
  Put,
  Delete,
} from '@nestjs/common';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() body: CreateCatDto): Promise<Cat> {
    return this.catsService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    try {
      const res = await this.catsService.findOne(id);
      return res;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'The requested cat is not found',
        },
        403
      );
    }
  }

  @Put(':id')
  async updateOne(@Param('id') id: string) {
    return `Update id - ${id}`;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return `Delete id - ${id}`;
  }
}
