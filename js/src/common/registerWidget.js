import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import SimpleCalendarWidget from './components/SimpleCalendarWidget';

export default function (app) {
  new Widgets()
    .add({
      key: 'SimpleCal',
      component: SimpleCalendarWidget,
      isDisabled: false,
      isUnique: true,
      placement: 'end',
      position: 1,
    })
    .extend(app, 'justoverclock-simple-calendar-widget');
}
