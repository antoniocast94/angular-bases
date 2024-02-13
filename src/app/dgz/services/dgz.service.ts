
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzServices
{

  public characters: Character[] =
  [
    {
      id: uuid(),
      name: 'Kriling',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];
  // SIRVE PARA AGREGAR UN REGISTRO DE ULTMO EN EL ARREGLO
  addCharacter( character: Character ): void
  {
    // OPCION 1
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    // OPCION 2
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }
  // SIRVE PARA ELIMNAR UN REGISTRO ESPECIFICO EN EL ARREGLO
  // onDeleteCharacter( index: number )
  // {
  //   this.characters.splice( index, 1 );
  // }

  deleteCharacterById( id: string )
  {
    // debugger;
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
