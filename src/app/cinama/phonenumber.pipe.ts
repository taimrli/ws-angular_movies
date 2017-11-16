import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phonenumber'})
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string, countryCode: string): string {
    let parts = phoneNumber.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    let formatted = `${parts[1]} ${parts[2]} ${parts[3]} ${parts[4]}`;

    if (countryCode) {
      formatted = `+${countryCode} ${formatted.substring(1)}`;
    }

    return formatted;
  }
}
