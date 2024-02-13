
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
// import { Identificador } from '../interfaces/identificador.interface';
import { DbzServices } from '../services/dgz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html',
  // styleUrl: './app.component.css'
})
export class MainPageComponent
{
  constructor( private dbzSerices: DbzServices )
  {
    // dbzSerices.
  }

  get characters(): Character[]
  {
    return [ ...this.dbzSerices.characters ];
  }

  onDeleteCharacter( id: string ): void
  {
    this.dbzSerices.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ): void
  {
    this.dbzSerices.addCharacter( character );
  }
}



