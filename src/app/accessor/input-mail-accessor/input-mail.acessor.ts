import { debounceTime, distinct, map } from 'rxjs/operators';
import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'input-mail-accessor',
  template: `
    <label [formGroup]="forms">
      <input  
              [formControl]="value"
              pInputText
                 />
           
    </label>
  `,
    // styleUrls: ['./input-custom.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMailAccessor ),
      multi: true,
    },
  ],
})
export class InputMailAccessor implements ControlValueAccessor {



  @Input() forms: FormGroup;
  @Input() controlName;

  value;
  values:string;
  onChange(_: any) {}

  updateValue(NewValue) {
    debugger;
    this.value = NewValue;
    // сообщаем angular  о новом value
    const val = this.value 
    this.onChange(val);
  }

  // устанавливаем приходящий VALUE
  writeValue(value: any) {
    debugger
     this.value =this.controlName
    // this.value = new FormControl(value);
    this.value.valueChanges.pipe(
        distinct(),
        debounceTime(200),
        map(value => {
            return value 
        })

    ).subscribe(value => this.onChange(value))
 
  }



    // метод выхывает сам anglular и передает fn!
  registerOnChange(fn) {

    // сохранить функцию, через которую сообщать Angular
    // об изменении значения внутри компонента
    this.onChange = fn;
  }

  registerOnTouched() {}

}
