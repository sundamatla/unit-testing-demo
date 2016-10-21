import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {CapitalizeWordsPipe} from './capitalize-words-pipe';

describe('Capitalize Words Pipe Test', () => {
    let pipe:CapitalizeWordsPipe;

    beforeEach(() => {
       pipe = new CapitalizeWordsPipe();
    });

    it('Should capitalize each word in a string', () => {
        let result = pipe.transform('web development technologies', null);
        expect(result).toEqual('Web Development Technologies');
    });

});
