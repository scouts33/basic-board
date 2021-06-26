import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {
    this.boardRepository = boardRepository;
  }

  public findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  public findOne(id: number): Promise<Board> {
    return this.boardRepository.findOne(id);
  }

  public async remove(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }

  public async create(createBoardDto: CreateBoardDto): Promise<Board> {
    try {
      return await this.boardRepository.save(createBoardDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  public async update(
    boardId: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<UpdateResult> {
    return this.boardRepository.update(boardId, updateBoardDto);
  }
}
