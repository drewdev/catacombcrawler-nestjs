import { Injectable } from '@nestjs/common';

@Injectable()
export class CombatService {
  calculateCombat(player, enemy) {
    const playerAttack = player.strength + Math.random() * 10;
    const enemyDefense = enemy.defense + Math.random() * 5;

    return playerAttack > enemyDefense ? 'Player Wins' : 'Enemy Wins';
  }
}
