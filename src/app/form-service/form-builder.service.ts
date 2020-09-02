import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}
  value: ''
  createForm() {
    this.createForms()
  return  this.fb.group({
      name: 'MyName',
      login: '',
      mail: 'rex',
     params:  this.fb.control({id:0})
})

  }
  createForms() {
    return  this.fb.group({
        LOH: 'MyName',
        login: '',
        mail: 'rex',
        name: 'MyName',
       params:  this.fb.control({id:1})
  })

    }

}
