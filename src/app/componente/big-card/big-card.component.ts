import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent implements OnInit{
    @Input()
    foto:string = ""
    @Input()
    titulo:string = ""
    @Input()
    sub_titulo:string =""
    @Input()
    noticia:string = ""
    @Input()
    id:string = "0"

  ngOnInit(): void {

  }

}
