import { FornecedoresService } from './../fornecedores.service';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-fornecedor-buscar',
  templateUrl: './fornecedor-buscar.component.html',
  styleUrls: ['./fornecedor-buscar.component.css']
})
export class FornecedorBuscarComponent implements  OnInit  {
    fornecedores = [];


  constructor(private fornecedoresService: FornecedoresService) { }
  ngOnInit() {
      this.pesquisar();
}
pesquisar(){
    this.fornecedoresService.pesquisar()
    .then(fornecedor => this.fornecedores = fornecedor);
}



}
