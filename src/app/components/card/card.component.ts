import { Component, Input } from '@angular/core';

@Component({
  selector: 'neo-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() src: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
}
