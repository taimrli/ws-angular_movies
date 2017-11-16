import {PhoneNumberPipe} from "./phonenumber.pipe";

describe('Phone Number Pipe', () => {
  let pipe = new PhoneNumberPipe();
  let unformattedNumber = '0564410808';

  it('should correctly format a local phone number', () => {
    let actual = pipe.transform(unformattedNumber, undefined);

    expect(actual).toEqual('056 441 08 08');
  });

  it('should correctly format an international phone number', () => {
    let actual = pipe.transform(unformattedNumber, '41');

    expect(actual).toEqual('+41 56 441 08 08');
  });

  it('should return the original phone number if it does not match the required format', () => {
    let actual = pipe.transform('abc', undefined);

    expect(actual).toEqual('abc');
  })
});
