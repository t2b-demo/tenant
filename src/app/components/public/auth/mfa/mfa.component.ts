import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cognito-mfa',
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.css']
})
export class MFAComponent {
  @Input() destination: string;
  @Input() onSubmit: (code: string) => void;

  constructor() {
      console.log('MFAComponent constructor');
  }
}
