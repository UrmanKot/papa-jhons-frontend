import { Action } from '#shared/modules/icon/action.type';
import { Icon } from '#shared/modules/icon/icon.type';

export type ActionIconMap = Record<Action, Icon>;

export const actionIconMap: ActionIconMap = {

  /** Добавить */
  add: 'tuiIconPlusLarge',

  /** Применить */
  apply: 'tuiIconCheckLarge',

  /** Заблокировать */
  block: 'tuiIconCancelCircleLarge',

  /** Очистить */
  clear: 'tuiIconDeleteLarge',

  /** Отмена */
  cancel: 'tuiIconRemoveLarge',

  /** Закрыть */
  close: 'tuiIconCloseLarge',

  /** Показать */
  show: 'tuiIconShowLarge',

  /** Скрыть */
  hide: 'tuiIconHideLarge',

  /** Скачать */
  download: 'tuiIconDownloadLarge',

  /** Загрузить */
  upload: 'tuiIconUploadLarge',

  /** Комментировать */
  comment: 'tuiIconCommentLarge',

  /** Настроить */
  configure: 'tuiIconSettingsLarge',

  /** Копировать */
  copy: 'tuiIconCopyLarge',

  /** Сохранить */
  save: 'tuiIconUploadLarge',

  /** Удалить */
  delete: 'tuiIconTrashLarge',

  /** Перетащить */
  drag: 'tuiIconDragLarge',

  /** Выполнить/Завершить */
  done: 'tuiIconCheckLarge',

  /** Войти */
  enter: 'tuiIconLoginLarge',

  /** Редактировать */
  edit: 'tuiIconEditLarge',

  /** Выйти */
  exit: 'tuiIconLogoutLarge',

  /** Добавить в избранное */
  favorite: 'tuiIconStarLarge',

  /** Выключить звук */
  mute: 'tuiIconSoundOffLarge',

  /** Включить звук */
  unmute: 'tuiIconSoundLarge',

  /** Указать/получить местоположение */
  locate: 'tuiIconGeoLarge',

  /** Назад */
  goBack: 'tuiIconChevronLeftLarge',

  /** Нравится */
  like: 'tuiIconLikeLarge',

  /** Не нравится */
  dislike: 'tuiIconDislikeLarge',

  /** Заблокировать (замкнуть) */
  lock: 'tuiIconLockLarge',

  /** Разблокировать (разомкнуть) */
  unlock: 'tuiIconLockOpenLarge',

  /** Переместить */
  move: 'tuiIconDragLarge',

  /** Применить/Одобрить/Ok */
  ok: 'tuiIconCheckLarge',

  /** Вставить из буфера */
  paste: 'tuiIconAttachLarge',

  /** Закрепить */
  pin: 'tuiIconStarLarge',

  /** Заблокировать/Отключить (забанить) */
  ban: 'tuiIconCancelCircleLarge',

  /** Отклонить */
  accept: 'tuiIconCheckCircleLarge',

  /** Отклонить */
  reject: 'tuiIconCloseCircleLarge',

  /** Вернуть/Восстановить */
  restore: 'tuiIconRefreshLarge',

  /** Вернуть/Восстановить */
  return: 'tuiIconUndoLarge',

  /** Вернуть/Восстановить */
  undo: 'tuiIconUndoLarge',

  /** Повторить */
  redo: 'tuiIconRedoLarge',

  /** Обновить */
  refresh: 'tuiIconRefreshLarge',
  reload: 'tuiIconRefreshLarge',

  /** Искать */
  search: 'tuiIconSearchLarge',

  /** Фильтровать/Отсеять */
  filter: 'tuiIconFilterLarge',

  /** Запланировать */
  schedule: 'tuiIconCalendarLarge',

  /** Сортировать */
  sort: 'tuiIconOLLarge',

  /** Настроить */
  tune: 'tuiIconChartLarge',

  /** Анализировать */
  analyze: 'tuiIconChartLineLarge',

  /** Распечатать */
  print: 'tuiIconPrintLarge',

  /** Цитировать */
  quote: 'tuiIconQuoteLarge',

  /** Сфотографировать */
  photo: 'tuiIconCameraLarge',

  /** Прикрепить картинку */
  picture: 'tuiIconImgLarge',

  /** Отправить */
  send: 'tuiIconMailLarge',

  /** Записать */
  record: 'tuiIconMicLarge',

  /** Включить микрофон */
  micOn: 'tuiIconMicLarge',

  /** Выключить микрофон */
  micOff: 'tuiIconMicOffLarge',

  /** Воспроизвести */
  play: 'tuiIconPlayLarge',

  /** Приостановить/Пауза */
  pause: 'tuiIconPauseLarge',

  /** Остановить */
  stop: 'tuiIconStopLarge',

  /** Написать */
  message: 'tuiIconCommentLarge',
  text: 'tuiIconCommentLarge',
  /** Позвонить */
  call: 'tuiIconCallLarge',
};
