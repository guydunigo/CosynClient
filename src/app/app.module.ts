import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { KeyboardDetailComponent } from './keyboard-detail/keyboard-detail.component';
import { KeyboardsListComponent } from './keyboards-list/keyboards-list.component';
import { KeysListComponent } from './keys-list/keys-list.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

import { KeyboardService } from './keyboard.service';
import { KeyService } from './key.service';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [KeyboardService, KeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
