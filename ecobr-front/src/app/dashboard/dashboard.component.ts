import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    dashboard = {}

    constructor(private breadcrumbService: BreadcrumbService) {

        this.breadcrumbService.setItems([])
        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: ['/dash'] }
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
