import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  noImgPath = 'assets/img/noimage.png';

  transform(images: any[]): string {
    if (!images) {
      return this.noImgPath;
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return this.noImgPath;
    }
    
    return null;
  }

}
