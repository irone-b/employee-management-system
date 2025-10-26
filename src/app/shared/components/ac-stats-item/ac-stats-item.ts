import { Component, Input } from '@angular/core';
import { CurrencyFormatPipe } from '../../pipes/currency-format-pipe';
import { NgClass } from '@angular/common';
export type Tone = 'success' | 'danger' | 'info' | 'neutral';

export type StatItemVM = {
  label: string;
  amount: number;
  icon: string;
  tone: Tone;
};

@Component({
  selector: 'ac-stats-item',
  imports: [CurrencyFormatPipe],
  templateUrl: './ac-stats-item.html',
  styleUrl: './ac-stats-item.scss',
})
export class AcStatsItem {
  @Input() label!: string;
  @Input() amount!: number;
  @Input() icon: string = 'info';
  @Input() tone: Tone = 'neutral';
}
