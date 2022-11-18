import { Component, OnInit, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit {

  @ViewChild('qrvideo')
  videoElem: any;
  resultData: any;
  qrScanner: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.qrScanner = new QrScanner(this.videoElem.nativeElement, result => {
      this.resultData = result;
      console.log(result);
    }, {highlightScanRegion: true, maxScansPerSecond: 1});
  }

  startScanner(){
    this.qrScanner.start();
  }

  stopScanner(){
    this.qrScanner.stop();
  }


}
