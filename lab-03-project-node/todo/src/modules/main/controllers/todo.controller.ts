import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { TodoToItem, TodoToList } from 'src/modules/main/interfaces/todo';

import { TodoService } from 'src/modules/main/services/todo.service';

import { CreateTodoDto } from 'src/modules/main/dto/request/create-todo.dto';
import { UpdateTodoDto } from 'src/modules/main/dto/request/update-todo.dto';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('list')
  async getList(): Promise<{ meta: { total: number }; data: TodoToList[] }> {
    return await this.todoService.getList();
  }

  @Get('item/:id')
  async getItem(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<{ data: TodoToItem }> {
    return await this.todoService.getItemById(id);
  }

  @Post('item')
  async createItem(
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<{ data: TodoToItem }> {
    return await this.todoService.createItem(createTodoDto);
  }

  @Put('item/:id')
  async updateItem(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<{ data: TodoToItem }> {
    return await this.todoService.updateItem(id, updateTodoDto);
  }

  @Delete('item/:id')
  @HttpCode(204)
  async deleteItem(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    await this.todoService.deleteItem(id);
  }
}
