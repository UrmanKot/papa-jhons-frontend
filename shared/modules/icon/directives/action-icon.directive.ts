import { ComponentRef, Directive, ElementRef, Inject, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Action } from '../action.type';
import { TuiButtonComponent } from '@taiga-ui/core';
import { ACTION_ICON_MAP } from '#shared/modules/icon/action-map.token';
import { ActionIconMap } from '#shared/modules/icon/action-icon-map';
import { TuiActionComponent, TuiInputComponent, TuiMarkerIconComponent } from '@taiga-ui/kit';

@Directive({
  selector: '[actionIcon]'
})
export class ActionIconDirective implements OnInit, OnChanges {

  @Input('actionIcon') action: Action;

  constructor(
    @Inject(ACTION_ICON_MAP) private map: ActionIconMap,
    private elementRef: ElementRef,
    @Optional() @Inject(TuiInputComponent) private inputComponent: TuiInputComponent,
    @Optional() @Inject(TuiButtonComponent) private buttonComponent: TuiButtonComponent,
    @Optional() @Inject(TuiActionComponent) private actionComponent: TuiActionComponent,
    @Optional() @Inject(TuiMarkerIconComponent) private markerComponent: TuiMarkerIconComponent,
  ) {
  }

  ngOnInit(): void {
    this.apply();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.apply();
  }

  apply() {
    const icon = this.map[this.action] ?? null;
    if (this.inputComponent) this.inputComponent.icon = icon;
    else if (this.buttonComponent) this.buttonComponent.icon = icon;
    else if (this.actionComponent) this.actionComponent.icon = icon;
    else if (this.markerComponent) this.markerComponent.src = icon;
    else if (this.elementRef) this.elementRef.nativeElement.icon = icon;
  }

}
