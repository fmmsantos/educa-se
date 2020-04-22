import { Injectable, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Injectable()
export class BSUtils {

    public  loadOptions(list){
        var options:any = [{value: null, label: 'Selecione Item ' }];
        for (let item of list){
            options.push({value: item.codigo , label: item.nome });
        }

        return options
    }

    public  loadOptionsEnums(list){
        var options:any = [{value: null, label: 'Selecione Item ' }];
        for (let item of list){
            options.push({value: item.codigo , label: item.nome });
        }

        return options
    }

    public  setOptions(list){
        var options = [];
        for (let item of list){
            options.push({codigo: item.codigo , nome:item.nome });
        }

        return options
    }

    public removeCaractererEspecial(value){
        try{
            return value.replace(/[-[\]{}()*+?%&amp;amp;amp;amp;amp;@!?¨_:;.'"<>/=\\^$|#\b]/g, "")
        }catch(e){
            return value
        }
    }

    public clone(object){
        return Object.assign([], object)
    }
}
