// src/dishes/schemas/dish.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DishDocument = Dish & Document;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    // aquí tipamos ret como any para evitar el error de TS
    transform: (_doc, ret: any) => {
      // agregar 'id' y limpiar el objeto que se envía al front
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Dish {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  category: string; // "Menús del día", "Platos de fondo", "Agregados", "Bebestibles"

  @Prop()
  description?: string;

  @Prop()
  image?: string;

  @Prop({ type: [String], default: [] })
  ingredients: string[];
}

export const DishSchema = SchemaFactory.createForClass(Dish);
