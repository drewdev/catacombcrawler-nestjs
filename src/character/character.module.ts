import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './../entities/character.entity';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Character])], // Registrar la entidad
  providers: [CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
