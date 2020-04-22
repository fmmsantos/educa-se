import { Component, Input, Output, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LazyLoadEvent } from 'primeng/api';
import { Column } from 'primeng/primeng';

@Component({
    selector :'bs-loading',
    templateUrl: './bs-loading.component.html'
})
export class BSLoading implements OnInit  {
    @Input() mensagem:string
    constructor(public app: AppComponent) {
       // this.consultarRegistros(4,0)
    }
    ngOnInit(): void {
    }
}