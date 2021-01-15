import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'infraframe-demo';

  constructor(
    public dialog: MatDialog
  ) {}

  openReportDialog() {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      'width': '500px',
      autoFocus: false,
    });
  }

  logout() {
    window.location.href = 'https://infraframe.com/';
  }
}

@Component({
  selector: 'report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.sass', './app.component.sass']
})
export class ReportDialogComponent {

  workPlanLink: any = "https://drive.google.com/uc?export=download&id=1M57zTjbbRCwpboyG0fgIwPOOmsy24DDB";
  networkReportLink: any = "https://drive.google.com/uc?export=download&id=1NfwGT5KXLdKzuap9uupnqut8CZKgYe66";
  segmentReportLink: any = "https://drive.google.com/uc?export=download&id=1mAkzPEdPNxQt94Q6aXwnrM023qAQOWaA";
  csvLink: any = "https://drive.google.com/uc?export=download&id=1vDVG1ZUI5_thbC7a1jFEg6Pz22uAp5SR";

  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
  ) {
    this.dialogRef.backdropClick().subscribe(_ => {
      this.close();
    });
  }

  downloadLink(param) {
    if(param == 'workplan') var win = window.open(this.workPlanLink, "_blank");
    if(param == 'networkreport') var win = window.open(this.networkReportLink, "_blank");
    if(param == 'segmentreport') var win = window.open(this.segmentReportLink, "_blank");
    if(param == 'csv') var win = window.open(this.csvLink, "_blank");
    win.focus();
  }

  close() {
    this.dialogRef.close();
  }
}
