import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Controller('/api/board')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Get()
  async list(@Param('title', ParseIntPipe) request) {
    return this.boardService.findAll();
  }

  @Post()
  public async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardService.create(createBoardDto);
  }
}
