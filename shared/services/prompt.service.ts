import { Injectable, Provider } from '@angular/core';
import { AbstractTuiDialogService, TUI_DIALOGS } from '@taiga-ui/cdk';
import { PolymorpheusComponent, PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiBaseDialogContext } from '@taiga-ui/cdk/interfaces';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PromptComponent } from '#shared/components/prompt/prompt.component';

export interface PromptOptions {
  readonly heading: string;
  readonly default: string;
  readonly buttons: readonly [string, string];
}

@Injectable({
  providedIn: 'root',
})
export class PromptService extends AbstractTuiDialogService<PromptOptions> {
  readonly defaultOptions: PromptOptions = {
    heading: '',
    default: '',
    buttons: ['Ok', 'Отмена'],
  } as const;
  readonly component = new PolymorpheusComponent(PromptComponent);

  override open<G>(
    content: PolymorpheusContent<TuiBaseDialogContext<G> & PromptOptions>, options?: Partial<PromptOptions>
  ): Observable<G> {
    return super.open(content, options).pipe(
      // @ts-ignore
      filter(confirmed => confirmed !== false),
    );
  }
}

// Add this provider to app module
export const PROMPT_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: PromptService,
  multi: true,
};
