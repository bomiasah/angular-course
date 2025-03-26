import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  imports: [],
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.css'
})
export class WelcomeMessageComponent implements OnInit {
  message: string = "Whatever you would like it to be"; 

  constructor () {}

  ngOnInit(): void {
    // this.message = "Whatever you would like it to be";
  }
}
