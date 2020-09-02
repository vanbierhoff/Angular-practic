import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
<<<<<<< HEAD
 selector: 'input-custom',
 template: ` 
  <input  (onchange)="writeValue($event.value)" >

 `,
 providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => inputCustom ),
  multi: true
 }]
})
export class inputCustom implements ControlValueAccessor {
 @Input() ParentFormGroup

 value: string;
=======
  selector: 'input-custom',
  template: `
    <label>
      <input (change)="updateValue($event.target.value)"
             [(ngModel)]="value" />
             {{ domen }}
    </label>
  `,
    styleUrls: ['./input-custom.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => inputCustom),
      multi: true,
    },
  ],
})
export class inputCustom implements ControlValueAccessor {

  @Input() domen:string;
>>>>>>> 64f3deb3ffc37e31b64cd24d3ddf0f10edab3dab

  value:string;
  values:string;
  onChange(_: any) {}

  updateValue(NewValue) {
    debugger;
    this.value = NewValue;
    // сообщаем angular  о новом value
    const val = this.value + this.domen
    this.onChange(val);
  }

  // устанавливаем приходящий VALUE
  writeValue(value: any) {
    this.value = value;
    const dom  = localStorage.getItem('domen')
    this.domen = dom

  }

<<<<<<< HEAD
 registerOnChange(fn) {
  this.onChange = fn;
  console.log('ввел хуйню')
 }
=======
    // метод выхывает сам anglular и передает fn!
  registerOnChange(fn) {
    debugger
    // сохранить функцию, через которую сообщать Angular
    // об изменении значения внутри компонента
    this.onChange = fn;
  }
>>>>>>> 64f3deb3ffc37e31b64cd24d3ddf0f10edab3dab

  registerOnTouched() {}

  getDomen(){
   // если добавляем объект сначала переводим в JSON
   // При получении объекты парсим, строчки не нужнО!
    localStorage.setItem('domen', '@mail.rus')

  }
}

