import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { KeyboardDetailComponent } from './keyboard-detail/keyboard-detail.component';
import { KeyboardsListComponent } from './keyboards-list/keyboards-list.component';
import { KeysListComponent } from './keys-list/keys-list.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

import { KeyboardService } from './keyboard.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardDetailComponent,
    KeyboardsListComponent,
    KeysListComponent,
    KeyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KeyboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
