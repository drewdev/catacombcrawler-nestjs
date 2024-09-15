import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DungeonModule } from './dungeon/dungeon.module';
import { CharacterModule } from './character/character.module';
import { CombatModule } from './combat/combat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Dungeon } from './entities/dungeon.entity';
import { Encounter } from './entities/encounter.entity';

@Module({
  imports: [
    DungeonModule,
    CharacterModule,
    CombatModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '6969',
      database: 'catacomb_crawler',
      entities: [Character, Dungeon, Encounter],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Character, Dungeon, Encounter]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
