import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comtent',
  templateUrl: './comtent.component.html',
  styleUrl: './comtent.component.css'
})
export class ComtentComponent {
  @Input()
  foto:string='assets/img-big-card.png'
  @Input()
  titulo:string='Nosso Planeta, Nossas Escolhas'
  @Input()
  noticia:string=`O futuro do nosso planeta está nas mãos de cada um de nós. Cada escolha que fazemos, desde o consumo de energia até as decisões de estilo de vida, tem um impacto direto no meio ambiente. Neste blog, exploraremos o poder das nossas escolhas individuais e coletivas na preservação do nosso planeta. Vamos mergulhar em tópicos relacionados à energia sustentável, conservação ambiental e práticas de vida conscientes, destacando como cada pequena ação pode contribuir para um futuro mais verde e saudável.

  Tópicos Potenciais:

  O Poder das Escolhas Diárias: Analisaremos como nossas escolhas diárias, desde a dieta até o transporte, influenciam o meio ambiente. Discutiremos alternativas sustentáveis e dicas para reduzir nossa pegada ecológica no dia a dia.

  Energia Limpa em Casa: Exploraremos maneiras de adotar fontes de energia limpa em nossos lares, como a instalação de painéis solares, a adoção de sistemas de aquecimento eficientes e o uso de eletrodomésticos energeticamente eficientes.

  Transporte Sustentável: Destacaremos a importância de escolhas de transporte sustentáveis, como o uso de bicicletas, transporte público e veículos elétricos, e como isso pode ajudar a reduzir as emissões de gases de efeito estufa.

  Consumo Consciente: Abordaremos o impacto do consumo desenfreado e discutiremos estratégias para adotar um estilo de vida mais consciente, incluindo a redução, reutilização e reciclagem de produtos, bem como o apoio a marcas e produtos sustentáveis.

  Educação Ambiental: Enfatizaremos a importância da educação ambiental e como podemos promovê-la em nossas comunidades e escolas. Discutiremos iniciativas educacionais e projetos que visam aumentar a conscientização sobre questões ambientais e inspirar ação.

  Advocacia e Engajamento Cívico: Exploraremos o papel da advocacia e do engajamento cívico na promoção de políticas e práticas ambientais responsáveis. Destacaremos exemplos de campanhas bem-sucedidas e como os indivíduos podem se envolver para fazer a diferença.

  Conclusão:
  Cada escolha que fazemos tem um impacto, e é importante reconhecer o poder que temos como indivíduos e comunidades para moldar o futuro do nosso planeta. Ao adotarmos um estilo de vida mais sustentável e consciente, podemos trabalhar juntos para proteger e preservar o meio ambiente para as gerações futuras. Junte-se a nós nesta jornada de descoberta e ação em prol de um planeta mais saudável e sustentável para todos.`

}
