// src/dishes/dishes.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dish } from './schemas/dish.schema';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  findAll(): Promise<Dish[]> {
    return this.dishesService.findAll();
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string): Promise<Dish[]> {
    return this.dishesService.findByCategory(category);
  }
}
