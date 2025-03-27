import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FarewellMessageComponent } from './farewell-message/farewell-message.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, WelcomeMessageComponent, FarewellMessageComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bomi Angular 2025';
  showWelcomeMessage: boolean = true;
  farewellBackgroundColor: string = "#ffffff";

  toggleFarewellBackgrond(): void {
    this.farewellBackgroundColor = this.farewellBackgroundColor === "#ffffff" ? "#ff0000" : "#ffffff";
  }
}
