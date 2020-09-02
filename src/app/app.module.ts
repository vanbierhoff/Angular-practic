import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FormComponent } from './form/form.component';
import { InputMailAccessor  } from './accessor/input-mail-accessor/input-mail.acessor';






@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FormComponent,
    InputMailAccessor

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
