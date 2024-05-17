import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'neo-settings',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
