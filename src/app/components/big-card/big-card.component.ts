import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://portal.ciee.org.br/wp-content/uploads/2024/01/O-que-esperar-da-IA-em-2024.jpg"
  @Input()
  carTitle:string= "Nova AI no mercado!"
  @Input()
  cardDescription:string= "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce egestas, ipsum in viverra tristique, nisi loremiaculis nisl, nec mattis eros felis sit amet lectus."

  constructor(){}

  ngOnInit(): void {
      
  }
}
