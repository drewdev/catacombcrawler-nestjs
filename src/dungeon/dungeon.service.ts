import { Injectable } from '@nestjs/common';

@Injectable()
export class DungeonService {
  generateDungeon() {
    // Lógica para generar una mazmorra
    return {
      rooms: Math.floor(Math.random() * 5) + 3, // Genera entre 3 y 7 habitaciones
      enemies: Math.floor(Math.random() * 10),  // Número de enemigos aleatorios
      treasures: Math.floor(Math.random() * 3), // Tesoro aleatorio
    };
  }
}
