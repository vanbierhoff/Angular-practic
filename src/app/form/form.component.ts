
import { Component, OnInit, Output, Input } from '@angular/core';
import {  FormBuilderService } from '../form-service/form-builder.service'
import { FormBuilder, Form, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb :  FormBuilderService) { }
form: FormGroup

value;
  ngOnInit(): void {
  this.form = this.fb.createForm()
  setInterval(()=> {
    console.log(this.form)
  },10000)

}

    send(e){
      console.log(e)
    }







}
