import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoEntity } from 'src/modules/main/entities/todo.entity';

import { TodoController } from 'src/modules/main/controllers/todo.controller';

import { TodoService } from 'src/modules/main/services/todo.service';

import { TodoDataMapper } from 'src/modules/main/data-mappers/todo.data-mapper';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [TodoService, TodoDataMapper],
})
export class MainModule {}
