import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/simple-calendar-widget', () => {
  registerWidget(app);
});
