import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-nav-item',
  imports: [],
  templateUrl: './ac-nav-item.html',
  styleUrl: './ac-nav-item.scss',
})
export class AcNavItem {
  //Todo integrate with router and routerlink in future
  @Input() link!: string | any[];
  @Input() title!: string;
  @Input() icon!: string;
  @Input() isActive!: boolean;
}
