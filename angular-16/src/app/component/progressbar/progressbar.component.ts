import { Component } from '@angular/core';
import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ngbd-pagination',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './progressbar.component.html',
  providers: [NgbProgressbarConfig]
})
export class NgbdpregressbarBasicComponent {
  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }
}
