import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-manager-app',
  template: `
    <app-sidenav></app-sidenav>
    <router-outlet>
  `,
  styles: [
  ]
})
export class ContactManagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
