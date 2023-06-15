import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent
			},
			{
				path: 'progressbar',
				component: NgbdpregressbarBasicComponent
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent
			},
			{
				path: 'buttons',
				component: NgbdButtonsComponent
			}
		]
	}
];
