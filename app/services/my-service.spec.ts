import {it, describe, expect, beforeEach} from 'angular2/testing';
import {MyService} from './my-service';

describe('MyService Tests', () => {
    let service:MyService = new MyService;

    it('Should return a list of Task runners', () => {
        var results = service.getTaskRunners(2);
        expect(results).toEqual(['Grunt', 'Gulp']); 
        expect(results.length).toBe(2);
    });

    it('Should get all available task runners', () => {
        var results = service.getTaskRunners(1000);
        expect(results).toEqual(['Grunt', 'Gulp', 'Webpack']); 
    });

}); 