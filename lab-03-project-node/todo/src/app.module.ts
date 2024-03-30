import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseNamingStrategy } from 'src/db/database-naming.strategy';

import { MainModule } from 'src/modules/main/main.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: false,
      logging: false,
      namingStrategy: new DatabaseNamingStrategy(),
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/**/migrations/*{.js,.ts}`],
    }),
    MainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
