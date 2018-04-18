import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proweb-accordion',
  templateUrl: './proweb-accordion.component.html',
  styleUrls: ['./proweb-accordion.component.css']
})
export class ProwebAccordionComponent implements OnInit {


  @Input('items') items;

  constructor() {

  }

  ngOnInit() {

  }

}

