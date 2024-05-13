import { Component } from '@angular/core';
import { NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-pagination',
  standalone: true,
  imports: [NgbPopoverModule, NgbTooltipModule],
  templateUrl: './popover-tooltip.component.html'
})
export class NgbdPopTooltipComponent {
  name = 'World';
}
