import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
 selector: 'input-custom',
 template: `
  <input (onchange)="writeValue($event.value)"
  >
 `,
 providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => inputCustom ),
  multi: true
 }]
})
export class inputCustom implements ControlValueAccessor {
 @Input()

 value = 100;

 onChange(_: any) {}


 writeValue(value: any) {
  this.value = value;

 }

 registerOnChange(fn) {
  this.onChange = fn;
 }

 registerOnTouched() {}
}
