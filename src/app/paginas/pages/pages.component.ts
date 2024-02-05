import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
    @Input()
  foto:string='assets/img-big-card.png'
    @Input()
  titulo:string='Nosso Planeta, Nossas Escolhas'
    @Input()
  noticia:string=`Como podemos alcançar a sustentabilidade ambiental?
  A busca pela sustentabilidade ambiental é um processo complexo e contínuo que exige a cooperação e participação de indivíduos, empresas e governos.

  Várias estratégias e ações podem ser implementadas para promover a sustentabilidade ambiental, mas algumas das mais eficazes são as seguintes:
  Redução das emissões de carbono: A queima de combustíveis fósseis, que emite grandes quantidades de dióxido de carbono na atmosfera, é um dos contribuintes mais significativos para o clima mudança. É fundamental reduzir nossa dependência de combustíveis fósseis e aumentar nosso uso de fontes de energia renováveis, como solar, eólica e hidrelétrica, para alcançar a sustentabilidade ambiental. Um aumento na participação de energia renovável pode ser alcançado por meio de investimentos em projetos de energia renovável, implementando medidas de eficiência energética e promovendo o uso de veículos elétricos.
  Conservação dos recursos naturais: Outro aspecto crítico da sustentabilidade ambiental é a conservação dos recursos naturais, como água, terra e florestas. Tal ação pode ser realizada preservando e protegendo habitats e ecossistemas naturais, gerenciando com responsabilidade os recursos hídricos e terrestres e promovendo práticas florestais e pesqueiras sustentáveis.
  Redução de resíduos e poluição: Outro aspecto da sustentabilidade ambiental é a redução de resíduos e poluição por meio da reciclagem, compostagem e limitação de plásticos descartáveis. As empresas podem implementar práticas sustentáveis, como redução de resíduos, uso de produtos e materiais ecologicamente corretos e promoção da reciclagem no local de trabalho.
  Promoção de comunidades sustentáveis: Outro aspecto necessário da sustentabilidade ambiental é o desenvolvimento de comunidades sustentáveis. Isso inclui tornar os bairros mais adequados para caminhadas e bicicletas, promover o transporte público e projetar edifícios e infraestrutura para serem mais eficientes em termos de energia.
  Incentivar ações individuais: Todos podem fazer a diferença tomando decisões conscientes sobre seus padrões de consumo e produção. Essas decisões podem ser alcançadas reduzindo o consumo de energia, comendo menos carne, usando transporte público, comprando produtos ecologicamente corretos e outras medidas.
  Políticas governamentais: As políticas governamentais desempenham um papel essencial na promoção da sustentabilidade ambiental, incluindo a promulgação de legislação para reduzir as emissões de carbono e conservar os recursos naturais, fornecendo incentivos financeiros para energia renovável e práticas sustentáveis ​​e investindo em pesquisa e desenvolvimento de novas tecnologias.
  É essencial reconhecer que alcançar a sustentabilidade ambiental é um processo contínuo que deve ser incorporado em nossas vidas e decisões diárias. Todos nós temos um papel a desempenhar, e é preciso assumir responsabilidades e fazer escolhas conscientes para preservar o meio ambiente para as gerações futuras.

  Em suma, a sustentabilidade ambiental necessita combinar ações individuais e coletivas e políticas governamentais. Trabalhar em conjunto pode reduzir nosso impacto ambiental, conservar os recursos naturais e garantir um planeta saudável e habitável para as gerações futuras.`
}
