import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './../entities/character.entity';

export class CreateCharacterDto {
  name: string;
  level: number;
}

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  findAll(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  async createCharacter(characterData: CreateCharacterDto): Promise<Character> {
    const newCharacter = this.characterRepository.create(characterData);
    return this.characterRepository.save(newCharacter);
  }
  
  async delete(id: number): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
