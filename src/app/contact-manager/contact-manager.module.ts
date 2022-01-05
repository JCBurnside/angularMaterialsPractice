import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import components from './components';
import SharedModule from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ...components,
  ],
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
    SharedModule,
  ]
})
export class ContactManagerModule { }
