import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const Modules = [
  CommonModule,    
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  FormsModule,
  FlexLayoutModule,
]

@NgModule({
  declarations: [],
  imports: Modules,
  exports: [...Modules]
})
export default class SharedModule { }
