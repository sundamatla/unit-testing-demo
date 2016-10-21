///<reference path="../../node_modules/angular2/typings/jasmine/jasmine.d.ts"/>
import {it, describe, expect, beforeEach} from 'angular2/testing';
import {MyList} from "./my-list";
import {MyService} from "../services/my-service";
 
describe('MyList Tests', () => {
    let list:MyList;
    let service:MyService = new MyService();
 
    beforeEach(() => {
        list = new MyList(service);
    });
 
    it('Should get 3 Task runners', () => {
        list.ngOnInit();
        expect(list.items.length).toBe(3);
    });
});