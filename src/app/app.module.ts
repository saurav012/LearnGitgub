import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonFormDialogComponent } from './components/person-form-dialog/person-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import{Headersection} from './Header-section/header-section';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { RouterModule } from '@angular/router';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent}
     ]),
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
     ],
  declarations: [
    AppComponent,
    DataTableComponent,
    ConfirmationDialogComponent,
    PersonFormDialogComponent,
    Headersection,
    CrisisListComponent

  
  
  ],
  providers: [],
  entryComponents: [ConfirmationDialogComponent, PersonFormDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
