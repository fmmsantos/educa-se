import { Directive, ElementRef, Renderer, ViewChild } from "@angular/core";
import { MultiSelect } from 'primeng/multiselect';

@Directive({ selector: '[bs-setar-combo]' })
export class BSSetarCombo {
  @ViewChild('cboPerfis') cboPerfis:MultiSelect

  
  constructor(private hostElement: ElementRef, private renderer: Renderer) {
    console.log(this.cboPerfis)
  }
}