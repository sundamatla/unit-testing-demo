import {Pipe, PipeTransform, Injectable} from 'angular2/core';

@Injectable()
@Pipe({name: 'capitalizeWords'})
export class CapitalizeWordsPipe implements PipeTransform{
    transform(text:string, args:any[]):any{
        return text.split(' ').map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }).join(' ');
    }

}