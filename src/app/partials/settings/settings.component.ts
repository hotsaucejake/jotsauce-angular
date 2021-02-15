import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppSettings } from 'src/app/core/interfaces/app/app-settings.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() options!: AppSettings;
  @Input() perfectScrollbar!: PerfectScrollbarConfigInterface;
  @Output() updateOptions = new EventEmitter<AppSettings>();

  public showSettings = false;

  public tabStatus = 'justified';

  constructor() { }

  ngOnInit(): void {
  }

  public updateSettings(settings: AppSettings): void {
    this.updateOptions.emit(settings);
  }

}
