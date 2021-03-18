import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transroute'
})
export class TransroutePipe implements PipeTransform {

    constructor() {
    }

    transform(value: string | string[], lang?: string): string | string[] {
        if (!value || value.length === 0 || !lang) {
            return value;
        }
        let result = value;
        let prefix = lang === 'en' ? '' : `/${lang}`;
        if (typeof result === 'string') {
            result = prefix + result;
        } else {
            result = JSON.parse(JSON.stringify(value)) as string[];
            if (prefix.length) {
                result.unshift(prefix);
            }
            if (result.length > 1) {
                result[1] = result[1].substr(1);
            }
        }
        return result;
    }
}