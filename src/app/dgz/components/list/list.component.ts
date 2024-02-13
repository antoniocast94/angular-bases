import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dgz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent
{
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    }
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( index?: string ): void
  {
    if( !index ) return;
    // debugger;
    this.onDeleteId.emit( index );
  }

}
