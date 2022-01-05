import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ROUTES : Routes = [
  { path: 'demo', loadChildren:() => import('./demo/demo.module').then(m=>m.DemoModule) },
  { path: 'contacts', loadChildren:()=>import('./contact-manager/contact-manager.module').then(m=>m.ContactManagerModule)},
  { path: '**', redirectTo : 'contacts'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
