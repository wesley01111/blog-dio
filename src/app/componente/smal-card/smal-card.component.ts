import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
@Input()
  foto:string=""
  @Input()
  descricao:string=""
  @Input()
  id:string=""
}
