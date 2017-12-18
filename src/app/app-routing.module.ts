import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyboardsListComponent } from './keyboards-list/keyboards-list.component';
import { KeyboardDetailComponent } from './keyboard-detail/keyboard-detail.component';
import { KeysListComponent } from './keys-list/keys-list.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

import { PlayKbListComponent } from './play-kb-list/play-kb-list.component';
import { PlayKbDetailComponent } from './play-kb-detail/play-kb-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'config', pathMatch: 'full' },
  { path: 'config', component: KeyboardsListComponent },
  { path: 'config/:kb_id', component: KeyboardDetailComponent },
  { path: 'config/:kb_id/keys', component: KeysListComponent },
  { path: 'config/:kb_id/keys/:key_id', component: KeyDetailComponent },
  { path: 'play', component: PlayKbListComponent },
  { path: 'play/:kb_id', component: PlayKbDetailComponent },
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
