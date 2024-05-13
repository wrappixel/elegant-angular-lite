import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule, NgbNavPane } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-ngbd-accordion-basic',
	standalone: true,
	imports: [NgbAccordionModule, CommonModule, NgIf, NgbNavPane],
	templateUrl: 'accordion.component.html'
})
export class NgbdAccordionBasicComponent {


	disabled = false;
}
