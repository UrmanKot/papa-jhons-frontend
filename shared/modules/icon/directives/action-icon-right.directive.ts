import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Action } from '#shared/modules/icon/action.type';
import { ACTION_ICON_MAP } from '#shared/modules/icon/action-map.token';
import { ActionIconMap } from '#shared/modules/icon/action-icon-map';
import { TuiButtonComponent } from '@taiga-ui/core';

@Directive({
  selector: '[actionIconRight]'
})
export class ActionIconRightDirective implements OnInit, OnChanges {

  @Input('actionIconRight') action: Action;

  constructor(
    element: ElementRef,
    @Inject(ACTION_ICON_MAP) private map: ActionIconMap,
    @Optional() @Inject(TuiButtonComponent) private buttonComponent: TuiButtonComponent,
  ) {
  }

  ngOnInit(): void {
    this.apply();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.apply();
  }

  apply() {
    if (this.buttonComponent) this.buttonComponent.iconRight = this.map[this.action];
  }
}
