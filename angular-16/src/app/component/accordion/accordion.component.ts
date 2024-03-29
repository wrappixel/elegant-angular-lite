import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-ngbd-accordion-basic',
	standalone: true,
	imports: [NgbAccordionModule, CommonModule, NgIf],
	templateUrl: 'accordion.component.html'
})
export class NgbdAccordionBasicComponent {
	beforeChange($event: NgbPanelChangeEvent) {
		if ($event.panelId === 'preventchange-2') {
			$event.preventDefault();
		}

		if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
			$event.preventDefault();
		}
	}

	disabled = false;
}
