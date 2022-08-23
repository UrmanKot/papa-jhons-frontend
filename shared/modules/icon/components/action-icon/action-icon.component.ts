import { Component, Inject, Input } from '@angular/core';
import { Action } from '../../action.type';
import { ActionIconMap } from '#shared/modules/icon/action-icon-map';
import { tuiPure } from '@taiga-ui/cdk';
import { Icon } from '#shared/modules/icon/icon.type';
import { ACTION_ICON_MAP } from '#shared/modules/icon/action-map.token';

@Component({
  selector: 'uc-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss'],
})
export class ActionIconComponent {

  @Input() action: Action;
  @Input() size;

  constructor(
    @Inject(ACTION_ICON_MAP)
    private map: ActionIconMap,
  ) {
  }

  @tuiPure
  get icon(): Icon {
    return this.map[this.action] || this.action;
  }
}
