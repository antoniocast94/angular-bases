import { Component } from '@angular/core';
import { elementAt, retry } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent
{
  public name: string = 'Ironman';
  public age:  number = 45;

  get capitalizedName(): string
  {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string
  {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero( value: string ): void
  {
    this.name = value;
  }

  changeAge( value: number ): void
  {
    this.age = value;
  }

  resetForm(): void
  {
    this.name = 'Ironman';
    this.age = 45;

    // ----
    // document.querySelectorAll('h1')!.forEach(element =>
    //   {
    //     element.innerHTML = '<h1>Desde Angular</h1>';
    //   }
    // )
  }

}
