import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyboardsListComponent } from './keyboards-list/keyboards-list.component';
import { KeyboardDetailComponent } from './keyboard-detail/keyboard-detail.component';
import { KeysListComponent } from './keys-list/keys-list.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/keyboards', pathMatch: 'full' },
  { path: 'keyboards', component: KeyboardsListComponent },
  { path: 'keyboards/:id', component: KeyboardDetailComponent },
  { path: 'keys', component: KeysListComponent },
  { path: 'keys/:id', component: KeyDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
