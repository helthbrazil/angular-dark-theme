import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'neo-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string | undefined;
  @Output() clickEvent = new EventEmitter();

  click(){
    this.clickEvent.emit();
  }
}
