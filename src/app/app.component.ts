import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brumfinance-ui';

  constructor(
    private toastyConfig: ToastyConfig

  ) {
    this.toastyConfig.theme = 'bootstrap';
    this.toastyConfig.position = 'top-center';
    this.toastyConfig.timeout = 5000;
  }
}
