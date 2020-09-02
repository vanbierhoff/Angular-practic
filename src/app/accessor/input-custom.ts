import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
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

    // метод выхывает сам anglular и передает fn!
  registerOnChange(fn) {
    debugger
    // сохранить функцию, через которую сообщать Angular
    // об изменении значения внутри компонента
    this.onChange = fn;
  }

  registerOnTouched() {}

  getDomen(){
   // если добавляем объект сначала переводим в JSON
   // При получении объекты парсим, строчки не нужнО!
    localStorage.setItem('domen', '@mail.rus')

  }
}

