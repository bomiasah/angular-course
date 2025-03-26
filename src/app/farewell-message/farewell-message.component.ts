import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farewell-message',
  imports: [],
  templateUrl: './farewell-message.component.html',
  styleUrl: './farewell-message.component.css'
})
export class FarewellMessageComponent implements OnInit {
  farewellMessage: string = "See you later aligator...";

  constructor () {}
  
  ngOnInit(): void {
    
  }
}
