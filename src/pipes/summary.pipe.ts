import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "summary"
})
export class SummaryPipe implements PipeTransform{
    // transform(value: any, ...args: any[]) {
    transform(value: string, limit?: number, another?) {
        if(!value) // ifis: null, empty, undefined
            return null;
        
        let actualLimit = (!limit) ? 50 : limit;
        return value.substr(0, actualLimit) + '...';
    }
}
