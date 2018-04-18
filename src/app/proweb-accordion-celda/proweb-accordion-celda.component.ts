import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proweb-accordion-celda',
  templateUrl: './proweb-accordion-celda.component.html',
  styleUrls: ['./proweb-accordion-celda.component.css']
})
export class ProwebAccordionCeldaComponent implements OnInit {

  @Input('label') label;
  @Input('contenido') contenido;
  labelComponent: string;
  bool: boolean;

  constructor() {
    this.bool = false;
  }

  pulsar() {
    if (this.bool) {
      this.bool = false;
      this.labelComponent = '\u21E8' + this.label;
    } else {
      this.bool = true;
      this.labelComponent = '\u21E9' + this.label;
    }
  }

  ngOnInit() {
    this.labelComponent = '\u21E8' + this.label;
  }

}
