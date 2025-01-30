import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreationAttributes } from '#/database/entities/Users';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Get()
  async findOne() {
    return this.userService.getById('1');
  }

  @Post()
  async create(attributes: UserCreationAttributes) {
    return this.userService.create(attributes);
  }

  @Put(':id')
  async update(@Param('id') id: string) {
    return this.userService.update(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
