import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { EventService } from '../service/eventservice';
import { Car } from '../domain/car';
import { SelectItem } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { BreadcrumbService } from '../../breadcrumb.service';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent implements OnInit {

    dashboard = {}

    constructor(private breadcrumbService: BreadcrumbService) {

        this.breadcrumbService.setItems([])
        this.breadcrumbService.setItems([
            { label: 'Inicio', routerLink: ['/início'] }
        ]);
    }

    ngOnInit() {
       this.refresh()
    }

    refresh() {
        /*
        this.pesquisaColaboradorResource.getDashboard().subscribe(response => {
            this.dashboard = response
           // setTimeout(() => { this.refresh(); }, 5000);
        });
        */
    }
}
