import { Component } from '@angular/core';
import { NgbTimeStruct, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-ngbd-timepicker',
  standalone: true,
  imports: [NgbTimepickerModule, NgIf, FormsModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './timepicker.component.html'
})
export class NgbdtimepickerBasicComponent {
  time = { hour: 13, minute: 30 };
  meridian = true;

  // This is for the seconds
  seconds = true;
  // This is for the spinners
  spinners = true;

  // This is for the column step
  time2: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  // This is for the validation
  time3: any;
  ctrl = new FormControl('', (control: any) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleSpinners() {
    this.spinners = !this.spinners;
  }
}
