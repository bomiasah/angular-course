import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent implements OnInit {

  userInput: string = "";
  selectedColor: string = "#000000";

  constructor () {}

  ngOnInit(): void {
    
  }
}
