import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({
    example: 'Learn NestJS',
    description: 'The title of the todo',
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    example: 'Learn NestJS with the official documentation',
    description: 'The description of the todo',
    maxLength: 2000,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;
}
