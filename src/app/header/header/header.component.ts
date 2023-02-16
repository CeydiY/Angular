import { Component } from '@angular/core';
import {query} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  changeStyle = {
  }
  clicks(element : string){
    if(element === "1"){
      this.changeStyle = {
        'background-color': '#ffc107',
        'font-family': "'Quicksand', sans-serif",
        'font-size': '1.3em'
      }
    }
    else if(element === "2"){
      this.changeStyle = {
        'background-color': '#6c757d',
        'font-family': "'Pacifico', cursive",
        'font-size': '1.3em'
      }
    }
    else if(element === "3"){
      this.changeStyle = {
        'background-color': '#0dcaf0',
        'font-family': "'Overpass Mono', monospace",
        'font-size': '1.3em'
      }
    }
    else{
      this.changeStyle = {
        'background-color': '#dc3545'
      }
    }
  };
}
