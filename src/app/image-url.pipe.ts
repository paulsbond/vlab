import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string): string {
    const url = document.baseURI + `assets/images/${value}`;
    return `url("${url}")`;
  }
}
