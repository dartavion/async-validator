import { Directive, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YesNoService {
  get(value): Observable<any> {
    return combineLatest(of(value), of(2))
  }
}

export function yesNoValidator(yesNoService: YesNoService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return yesNoService.get(control.value).pipe(
      map(data => data)
    )
  };
}

// @Directive({
//   selector: '[appYesNo][formGroup]',
//   providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: YesNoDirective, multi: true }]
// })
// export class YesNoDirective implements AsyncValidator {
//
//   constructor(private yesNoService: YesNoService) {
//   }
//
//   validate(control: AbstractControl): Observable<ValidationErrors | null> {
//     // @ts-ignore
//     return yesNoValidator(this.yesNoService)(control);
//   }
// }


