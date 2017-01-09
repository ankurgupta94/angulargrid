import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'searchFilter'
})
@Injectable()
export class SearchFilterPipe implements PipeTransform{
    transform(items:any[],args:string):any{
        if(args){
            return items.filter(item => item.ProgramName.toLowerCase().indexOf(args.toLowerCase())> -1);
        }
        return items;
    }
}