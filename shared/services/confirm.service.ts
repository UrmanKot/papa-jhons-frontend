import { Injectable, Provider } from '@angular/core';
import { AbstractTuiDialogService, TUI_DIALOGS } from '@taiga-ui/cdk';
import { PolymorpheusComponent, PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ConfirmComponent } from '#shared/components/confirm/confirm.component';
import { TuiBaseDialogContext } from '@taiga-ui/cdk/interfaces';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface ConfirmOptions {
  readonly heading: string;
  readonly buttons: readonly [string, string];
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmService extends AbstractTuiDialogService<ConfirmOptions> {
  readonly defaultOptions = {
    heading: '',
    buttons: ['Да', 'Нет'],
  } as const;
  readonly component = new PolymorpheusComponent(ConfirmComponent);

  override open<G>(
    content: PolymorpheusContent<TuiBaseDialogContext<G> & ConfirmOptions>, options?: Partial<ConfirmOptions>
  ): Observable<G> {
    return super.open(content, options).pipe(
      filter(confirmed => !!confirmed),
    );
  }
}

// Add this provider to app module
export const CONFIRM_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: ConfirmService,
  multi: true,
};
