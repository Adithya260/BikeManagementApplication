import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  LDMode(){

    function myFunction() {
      const element: HTMLElement | null = document.body;
    
      if (element) {
        element.classList.toggle("dark-mode");
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      const button: HTMLButtonElement | null = document.querySelector("button");
    
      if (button) {
        button.addEventListener("click", myFunction);
      }
    });
  }
}
