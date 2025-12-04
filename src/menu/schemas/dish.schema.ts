import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DishDocument = Dish & Document;

@Schema({ timestamps: true })
export class Dish {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  category: string; // Menús del día, Platos de fondo, etc.

  @Prop()
  description?: string;

  @Prop()
  image?: string;

  @Prop({ type: [String], default: [] })
  ingredients: string[];
}

export const DishSchema = SchemaFactory.createForClass(Dish);
