import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindOptionsWhere, Repository } from 'typeorm';

import { TodoToItem, TodoToList } from 'src/modules/main/interfaces/todo';

import { TodoEntity } from 'src/modules/main/entities/todo.entity';

import { TodoDataMapper } from 'src/modules/main/data-mappers/todo.data-mapper';

import { CreateTodoDto } from 'src/modules/main/dto/request/create-todo.dto';
import { UpdateTodoDto } from 'src/modules/main/dto/request/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
    private readonly todoDataMapper: TodoDataMapper,
  ) {}

  private async getItemOrThrow(
    where: FindOptionsWhere<TodoEntity>,
  ): Promise<TodoEntity> {
    const item = await this.todoRepository.findOne({ where });

    if (item) {
      return item;
    } else {
      throw new NotFoundException();
    }
  }

  async getList(): Promise<{ meta: { total: number }; data: TodoToList[] }> {
    const list = await this.todoRepository.find();

    return {
      meta: {
        total: list.length,
      },
      data: list.map((item) => this.todoDataMapper.todoToList(item)),
    };
  }

  async getItemById(id: number): Promise<{ data: TodoToItem }> {
    const foundItem = await this.getItemOrThrow({ id });

    return { data: this.todoDataMapper.todoToItemById(foundItem) };
  }

  async createItem(
    createTodoDto: CreateTodoDto,
  ): Promise<{ data: TodoToItem }> {
    const todo = new TodoEntity(createTodoDto);
    const item = await this.todoRepository.save(todo);
    return {
      data: this.todoDataMapper.todoToItemById(item),
    };
  }

  async updateItem(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): Promise<{ data: TodoToItem }> {
    const foundItem = await this.getItemOrThrow({ id });
    Object.assign(foundItem, updateTodoDto);
    const item = await this.todoRepository.save(foundItem);
    return {
      data: this.todoDataMapper.todoToItemById(item),
    };
  }

  async deleteItem(id: number): Promise<void> {
    const foundItem = await this.getItemOrThrow({ id });
    await this.todoRepository.remove(foundItem);
  }
}
