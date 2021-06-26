import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
