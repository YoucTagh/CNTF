import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'boldStar' })
export class BoldStarPipe implements PipeTransform {
    transform(text: string) {
        const re = /\*\*(\w)*\*\*/g;
        var myArray = text.match(re);
        if (myArray != null)
            for (let str of myArray) {
                text = text.replace(str, '<span class="bold">' + str.substring(2, str.length - 2) + '</span>');
            }
        return text;
    }
}

