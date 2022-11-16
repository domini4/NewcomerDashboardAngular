import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from "@angular/material/input"; 
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { C1tableComponent } from './c1table/c1table.component';
import { C2tableComponent } from './c2table/c2table.component';
import { C3tableComponent } from './c3table/c3table.component';
import { C4tableComponent } from './c4table/c4table.component';
import { C5tableComponent } from './c5table/c5table.component';
import { C6tableComponent } from './c6table/c6table.component';
import { C7tableComponent } from './c7table/c7table.component';
import { C8tableComponent } from './c8table/c8table.component';
import { C9tableComponent } from './c9table/c9table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    C1tableComponent,
    C2tableComponent,
    C3tableComponent,
    C4tableComponent,
    C5tableComponent,
    C6tableComponent,
    C7tableComponent,
    C8tableComponent,
    C9tableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
