import {Injectable} from 'angular2/core'

@Injectable()
export class MyService{
    taskRunners:Array<string>;
    constructor(){
        this.taskRunners = ['Grunt', 'gulp', 'webpack', 'system js'];
    }

    getTaskRunners(count:number){
        var result = [];
        if (count > this.taskRunners.length) count = this.taskRunners.length;
        for (var i=0; i<count; i++) {
            result.push(this.taskRunners[i]);
        }
        return result;
    }
}