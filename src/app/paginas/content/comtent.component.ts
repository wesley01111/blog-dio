import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-comtent',
  templateUrl: './comtent.component.html',
  styleUrl: './comtent.component.css'
})
export class ComtentComponent implements OnInit{

  @Input()
  foto:string=''
  @Input()
  titulo:string=''
  @Input()
  noticia:string=''
  private id : string | null = '0'


  constructor(
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
      this.id = value.get("id")
    )
    this.conteudoComponent(this.id)
  }
  conteudoComponent(id:string | null){
    const result = dataFake.filter(noticia => noticia.id == id)[0]
    this.foto = result.foto
    this.titulo = result.titulo
    this.noticia = result.noticia


  }

}
