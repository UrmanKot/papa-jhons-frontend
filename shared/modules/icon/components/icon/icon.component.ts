import { Component, Input, OnInit } from '@angular/core';
import { Icon } from '#shared/modules/icon/icon.type';

@Component({
  selector: 'uc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() icon: Icon;
  // @Input() filled = false;
  @Input() size;

}
