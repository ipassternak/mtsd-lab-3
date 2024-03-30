import { Injectable } from '@nestjs/common';

import { TodoToList, TodoToItem } from 'src/modules/main/interfaces/todo';

import { TodoEntity } from 'src/modules/main/entities/todo.entity';

@Injectable()
export class TodoDataMapper {
  todoToList(entity: TodoEntity): TodoToList {
    const { id, title, description, isCompleted, createdAt, updatedAt } =
      entity;

    return {
      id,
      title,
      description,
      isCompleted,
      createdAt,
      updatedAt,
    };
  }

  todoToItemById(entity: TodoEntity): TodoToItem {
    const { id, title, description, isCompleted, createdAt, updatedAt } =
      entity;

    return {
      id,
      title,
      description,
      isCompleted,
      createdAt,
      updatedAt,
    };
  }
}
