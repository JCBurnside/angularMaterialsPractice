import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
<mat-card>
<section>
  <button mat-raised-button color="primary">click me!</button>
  <button mat-raised-button><mat-icon>face</mat-icon></button>
</section>
<mat-divider></mat-divider>
<section>
  <mat-checkbox>Foo</mat-checkbox>
</section>
</mat-card>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
