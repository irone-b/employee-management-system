import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon';

@Component({
  selector: 'ac-button',
  imports: [NgClass],
  templateUrl: './ac-button.html',
  styleUrl: './ac-button.scss',
})
export class AcButton {
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled = false;
}
