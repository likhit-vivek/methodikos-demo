import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, IriAnalysisDialogComponent, PciAnalysisDialogComponent, ReportDialogComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ReportDialogComponent,
    PciAnalysisDialogComponent,
    IriAnalysisDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDividerModule
  ],
  entryComponents: [
    ReportDialogComponent,
    PciAnalysisDialogComponent,
    IriAnalysisDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
