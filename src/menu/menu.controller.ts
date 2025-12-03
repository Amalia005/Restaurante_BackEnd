import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  // GET /api/menu
  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  // GET /api/menu/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(id);
  }

  // POST /api/menu
  @Post()
  create(@Body() dto: CreateDishDto) {
    return this.menuService.create(dto);
  }

  // PATCH /api/menu/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDishDto) {
    return this.menuService.update(id, dto);
  }

  // DELETE /api/menu/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }
}
