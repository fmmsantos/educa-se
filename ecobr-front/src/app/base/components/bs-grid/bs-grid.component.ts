import { Component, Input, Output, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LazyLoadEvent } from 'primeng/api';
import { Column } from 'primeng/primeng';

@Component({
    selector :'bs-grid',
    templateUrl: './bs-grid.component.html'
})
export class BSGridComponent implements OnInit  {

    
    filtros = {};

    totalRecordsGrid: any;

    @Input() titulo:string
    @Input() newModal:boolean = false
    @Input() cols: any[]
    @Input() resourceControll:any
    @Input() results:any[] = [];
    @Input() loadingGrid:boolean = false

    constructor(public app: AppComponent) {
       // this.consultarRegistros(4,0)
    }

    ngOnInit(): void {
    }
    
    loadGridLazy(event: LazyLoadEvent) {
        const self = this;
        this.loadingGrid = true;

        setTimeout(() => {
            let page = event.first / event.rows;
            //self.consultarRegistros(event.rows, page);
        }, 500);
    }

    getStyle(col){
        var style = "'width':'" +  `${col.width}` +  "'"
       return style
    }

    getRowValue(col){
        return col.field
    }
    consultarRegistros( rows, page) {
        const self = this;
        const pageable = {
            size: rows,
            sort: 'id',
            page: page
        }

        const requestPage = {
            filtros: self.filtros
        };

        requestPage['page'] = page;
        requestPage['size'] = rows;

        self.loadingGrid = false;
        self.resourceControll.consultar(requestPage).then(response => {
            self.results = response.content
            self.totalRecordsGrid = response.totalElements
        });
    }
}