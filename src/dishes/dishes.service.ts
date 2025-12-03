// src/dishes/dishes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dish, DishDocument } from './schemas/dish.schema';

@Injectable()
export class DishesService {
  constructor(
    @InjectModel(Dish.name)
    private readonly dishModel: Model<DishDocument>,
  ) {}

  // GET /api/dishes
  findAll() {
    return this.dishModel.find().exec();
  }

  // GET /api/dishes/category/:category
  findByCategory(category: string) {
    return this.dishModel.find({ category }).exec();
  }
}
