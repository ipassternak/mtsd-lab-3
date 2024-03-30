import { ApiProperty } from '@nestjs/swagger';

import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateTodoDto {
  @ApiProperty({
    example: 'Take some rest',
    description: 'The title of the todo to update',
    maxLength: 255,
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title?: string;

  @ApiProperty({
    example: 'Take some rest after a long day of work',
    description: 'The description of the todo to update',
    maxLength: 2000,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @ApiProperty({
    example: true,
    description: 'The completion status of the todo to update',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
