import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MyCustomIfDirective } from './my-custom-if-directive.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyCustomIfDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
