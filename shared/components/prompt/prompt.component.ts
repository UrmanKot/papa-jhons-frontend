import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialog } from '@taiga-ui/cdk';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

export interface PromptOptions {
  readonly heading: string;
  readonly default: string;
  readonly buttons: readonly [string, string];
}

@Component({
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromptComponent {

  text = '';

  // Here you get options + content + id + observer
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, string | boolean>,
  ) {
    this.text = context.default;
  }

  onClick(response: string | false) {
    this.context.completeWith(response);
  }
}
