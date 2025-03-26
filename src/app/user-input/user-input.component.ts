import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent implements OnInit {

  userInput: string = "";
  selectedColor: string = "#fff";

  constructor () {}

  ngOnInit(): void {
    
  }
}
