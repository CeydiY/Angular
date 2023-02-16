import {Component, HostListener, Input} from '@angular/core';
import {SideBarComponent} from "../../side_bar/side-bar/side-bar.component";

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent {
  @Input()
  sideBar: SideBarComponent = new SideBarComponent;

  @HostListener('click')
  click(){
    this.sideBar.toggle();
  }
}
