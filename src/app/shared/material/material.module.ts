import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
const modules=[
  HttpClientModule,
  CommonModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule
]
@NgModule({
  declarations: [],
  imports:modules,
  exports:[...modules]
})
export class MaterialModule { }
