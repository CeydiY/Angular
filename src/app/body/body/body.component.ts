import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  p_body = 'h4';
  Name = ['Aaron','Emily','Spencer','Jennifer','Penélope','David','Derek'];
  lastName = ['Hotchner','Prentiss','Reid','Jareau','García','Rossi','Morgan'];
  alias =['Hotch', 'Prentiss','Spen','JJ', 'García', 'Rossi','Morgan'];

}

