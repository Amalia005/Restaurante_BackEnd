import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dish, DishDocument } from './schemas/dish.schema';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Dish.name) private dishModel: Model<DishDocument>,
  ) {}

  findAll() {
    return this.dishModel.find().exec();
  }

  async findOne(id: string) {
    const dish = await this.dishModel.findById(id).exec();
    if (!dish) {
      throw new NotFoundException('Plato no encontrado');
    }
    return dish;
  }

  create(createDishDto: CreateDishDto) {
    const created = new this.dishModel(createDishDto);
    return created.save();
  }

  async update(id: string, updateDishDto: UpdateDishDto) {
    const updated = await this.dishModel
      .findByIdAndUpdate(id, updateDishDto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException('Plato no encontrado');
    }
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.dishModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException('Plato no encontrado');
    }
    return deleted;
  }
}
