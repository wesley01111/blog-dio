import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../DATA/dataFake';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent implements OnInit{
    @Input()
  foto:string=''
    @Input()
  titulo:string=''
    @Input()
  noticia:string=``

private id:string | null="0"

  constructor(
    private router:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.router.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setaValoresComponent(this.id)
  }

  setaValoresComponent (id:string|null){
const result = dataFake.filter(article => article.id.toString() === id)[0]
this.foto = result.foto
this.titulo = result.titulo
this.noticia = result.noticia
}

}

