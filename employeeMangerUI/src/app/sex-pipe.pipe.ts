import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexPipe'
})
export class SexPipePipe implements PipeTransform {

  transform(value: boolean): string {
    if (value == true) {
      return "Male"
    }
    return "Female"
  }

}
