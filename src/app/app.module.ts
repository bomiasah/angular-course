import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FarewellMessageComponent } from './farewell-message/farewell-message.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    WelcomeMessageComponent,
    FarewellMessageComponent,
    UserInputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
