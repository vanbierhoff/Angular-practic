import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}
  value: ''
  createForm() {
  return  this.fb.group({
      name: 'MyName',
      login: '',
      mail: '@mail.ru'
})

  }

}
