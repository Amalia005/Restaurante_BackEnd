import { IsNumber, IsOptional, IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateDishDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  ingredients?: string[];
}
