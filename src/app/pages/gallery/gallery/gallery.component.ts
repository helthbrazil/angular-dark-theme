import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'neo-gallery',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
