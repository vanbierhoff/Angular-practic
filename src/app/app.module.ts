import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FormComponent } from './form/form.component';
import { AccessorComponent } from './accessor/accessor.component';
import { inputCustom } from './accessor/input-custom'





@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FormComponent,
    inputCustom,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
