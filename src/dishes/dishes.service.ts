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

  // Devuelve todos los platos
  async findAll(): Promise<Dish[]> {
    return this.dishModel.find().lean().exec();
  }

  // Devuelve platos filtrados por categoría
  async findByCategory(category: string): Promise<Dish[]> {
    return this.dishModel
      .find({ category })
      .lean()
      .exec();
  }
}
