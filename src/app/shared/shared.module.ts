import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'; 
const Modules = [
  CommonModule,    
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  FormsModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
]

@NgModule({
  declarations: [],
  imports: Modules,
  exports: [...Modules]
})
export default class SharedModule { }
