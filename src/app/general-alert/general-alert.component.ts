import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-alert',
  templateUrl: './general-alert.component.html',
  styleUrls: ['./general-alert.component.css']
})
export class GeneralAlertComponent implements OnInit {

  @Input() message: string;
  @Input() type: string;
  alertClass: string;

  constructor() { }

  ngOnInit() {
    this.alertClass = `alert-${this.type}`;
  }

}
