import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent
{
  // Esto es para emitir el objeto character
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void
  {
    if( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit( { ...this.character } );
    // reset del form
    this.character.name = '';
    this.character.power = 0;
  }
}
