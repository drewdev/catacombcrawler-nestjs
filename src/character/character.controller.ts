import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './../entities/character.entity';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  getAllCharacters(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  @Post('create')
  createCharacter(@Body() characterData: Character): Promise<Character> {
    return this.characterService.createCharacter(characterData);
  }

  @Delete(':id')
  deleteCharacter(@Param('id') id: number): Promise<void> {
    return this.characterService.delete(id);
  }
}
