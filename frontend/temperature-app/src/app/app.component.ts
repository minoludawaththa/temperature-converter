import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Needed for input binding
import { TemperatureService } from './temperature.service'; // Import your service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Temperature Converter';

  // Variables to store user input
  temperatureValue: number = 0;
  fromUnit: string = 'C';
  toUnit: string = 'F';
  result: number | null = null;
  errorMessage: string = '';

  // Inject the Service and ChangeDetectorRef
  constructor(private tempService: TemperatureService, private cd: ChangeDetectorRef) {}

  onConvert() {
    this.errorMessage = '';
      this.result = null;

    // 1. Determine the conversion type based on Dropdowns
    let conversionType = '';

    if (this.fromUnit === 'C' && this.toUnit === 'F') conversionType = 'c-to-f';
    else if (this.fromUnit === 'C' && this.toUnit === 'K') conversionType = 'c-to-k';
    else if (this.fromUnit === 'F' && this.toUnit === 'C') conversionType = 'f-to-c';
    else if (this.fromUnit === 'K' && this.toUnit === 'C') conversionType = 'k-to-c';
    else {
      this.errorMessage = 'This conversion is not supported by the backend yet!';
      return;
    }

    // 2. Call the Backend
    this.tempService.convert(conversionType, this.temperatureValue).subscribe({
      next: (response) => {
        // The backend returns keys like "fahrenheit" or "kelvin" or "celsius"
        // We pick the one that matches our 'toUnit'
        if (this.toUnit === 'F') this.result = response.fahrenheit;
        else if (this.toUnit === 'K') this.result = response.kelvin;
        else if (this.toUnit === 'C') this.result = response.celsius;
        // Ensure the view updates immediately (fixes case where change detection didn't run)
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error connecting to backend. Is it running?';
        this.cd.detectChanges();
      }
    });
  }
}