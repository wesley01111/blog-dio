import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
@Input()
foto:string=""
@Input()
titulo:string=""
@Input()
descricao:string=""
}
