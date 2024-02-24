import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent implements OnInit {

  @Input()
  foto:string =""
  @Input()
  titulo:string =""
  @Input()
  id:string ="0"
  ngOnInit(): void {

  }

}
