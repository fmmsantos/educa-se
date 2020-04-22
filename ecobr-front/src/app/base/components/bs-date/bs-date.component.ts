import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'bs-date',
    templateUrl: './bs-date.component.html'
})
export class BSDateComponent implements OnInit , ControlValueAccessor {
    @Input() value = new Date();
    @Output() valueChange = new EventEmitter();

    
    
    pt = {
        firstDayOfWeek: 0,
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        clear: 'Limpar'
    };
    
    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }

    constructor() { }
    ngOnInit() {
    
    }

    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    change(value: any): void {
        if (value.indexOf('-') <= 0 && value.length === 8) {
            console.log(value)
            this.value = new Date(value.substr(4, 4) + '/' + value.substr(2, 2) + '/' + value.substr(0, 2))
        }

        if (value.indexOf('-') >= 0 && value.length === 10) {
            this.value = new Date(value.substr(8, 2) + '/' + value.substr(5, 2) + '/' + value.substr(0, 4))
        }
        this.valueChange.emit(this.value);
    }

    onSelectMethod(event){
        let value = new Date(Date.parse(event))
        this.valueChange.emit(value)
    }

    onChange(event){
        alert(event)
    }
}