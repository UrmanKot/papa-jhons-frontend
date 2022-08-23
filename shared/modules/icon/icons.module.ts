import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { TUI_ICONS_PATH, TuiSvgModule } from '@taiga-ui/core';
import { TuiStringHandler } from '@taiga-ui/cdk';
import * as tuiIcons from '@taiga-ui/icons';
import { Icon } from './icon.type';
import { actionIconMap, ActionIconMap } from '#shared/modules/icon/action-icon-map';
import { ActionIconDirective } from '#shared/modules/icon/directives/action-icon.directive';
import { ACTION_ICON_MAP } from '#shared/modules/icon/action-map.token';
import { ActionIconRightDirective } from './directives/action-icon-right.directive';

class IconsConfig<I extends Icon> {
  /** Пусть к иконкам. По-умолчанию "assets/icons" */
  path?: TuiStringHandler<I> | string;
  /** Соответсвие действий с иконками */
  actions?: ActionIconMap;
  /** Если нужно переопределить иконки тайги */
  tuiCoreIcons?: Partial<typeof tuiIcons.tuiCoreIcons>;
  /** Если нужно переопределить иконки тайги */
  tuiKitIcons?: Partial<typeof tuiIcons.tuiKitIcons>;
}

const defaultConfig: IconsConfig<Icon> = {
  path: 'assets/icons',
  actions: actionIconMap,
  tuiCoreIcons: {},
  tuiKitIcons: {}
};

export function iconsPath<I extends Icon>(config: IconsConfig<I>): TuiStringHandler<string> {
  // return icons[name] ?? iconsPathFactory(name);
  // FIXME: It cant resolve svg directly
  // if (name.startsWith('<svg')) return name;
  // else if (name.startsWith('tuiIcon')) return tuiIcons[name] ?? `assets/taiga-ui/icons/${name}.svg#${name}`;
  // else return `assets/icons/${name}.svg#${name}`;

  return (name: string) => {
    if (name.startsWith('tuiIcon') && (config.tuiCoreIcons[name] || config.tuiKitIcons[name])) {
      name = config.tuiCoreIcons[name] ?? config.tuiKitIcons[name];
    }
    const path = name.startsWith('tuiIcon') ? `assets/taiga-ui/icons/${name}.svg` : `${config.path}/icons.svg`;
    return `${path}#${name}`;
  };
}

@NgModule({
  declarations: [
    IconComponent,
    ActionIconComponent,
    ActionIconDirective,
    ActionIconRightDirective,
  ],
  imports: [
    CommonModule,
    TuiSvgModule,
  ],
  exports: [
    IconComponent,
    ActionIconComponent,
    ActionIconDirective,
    ActionIconRightDirective,
  ]
})
export class IconsModule {
  static forRoot<I extends Icon>(config: IconsConfig<I> = {}): ModuleWithProviders<IconsModule> {
    config = Object.assign({}, defaultConfig, config);
    return {
      ngModule: IconsModule,
      providers: [
        {provide: IconsConfig, useValue: config},
        {provide: ACTION_ICON_MAP, useValue: config.actions},
        {provide: TUI_ICONS_PATH, useFactory: iconsPath, deps: [IconsConfig]},
      ],
    };
  }
}
