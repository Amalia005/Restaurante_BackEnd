import { Controller, Get, Query } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dish } from './schemas/dish.schema';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  // GET /api/dishes
  // GET /api/dishes?category=Menús del día
  @Get()
  async findAll(
    @Query('category') category?: string,
  ): Promise<Dish[]> {
    if (category) {
      // si viene ?category=... filtramos
      return this.dishesService.findByCategory(category);
    }
    // si no viene, devolvemos todo
    return this.dishesService.findAll();
  }
}
