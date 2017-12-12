import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyboardsListComponent } from './keyboards-list/keyboards-list.component';
import { KeyboardDetailComponent } from './keyboard-detail/keyboard-detail.component';
import { KeysListComponent } from './keys-list/keys-list.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/keyboards', pathMatch: 'full' },
  { path: 'keyboards', component: KeyboardsListComponent },
  { path: 'keyboards/:kb_id', component: KeyboardDetailComponent },
  { path: 'keyboards/:kb_id/keys', component: KeysListComponent },
  { path: 'keyboards/:kb_id/keys/:k_id', component: KeyDetailComponent },
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
