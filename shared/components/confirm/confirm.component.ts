import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialog } from '@taiga-ui/cdk';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

export interface ConfirmOptions {
  readonly heading: string;
  readonly buttons: readonly [string, string];
}

@Component({
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {

  // Here you get options + content + id + observer
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<ConfirmOptions, boolean>,
  ) {
  }

  onClick(response: boolean) {
    this.context.completeWith(response);
  }
}
