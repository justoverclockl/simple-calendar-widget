/*
 * This file is part of justoverclock/last-tweet.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class SimpleCalendarWidget extends Widget {
  oncreate(vnode) {
    const lang = navigator.language;

    const getActualDate = (lang) => {
      const date = new Date();

      const dayNumber = date.getDate();
      const month = date.getMonth();
      const dayName = date.toLocaleString(lang, { weekday: "long" });
      const monthName = date.toLocaleString(lang, { month: "long" });
      const year = date.getFullYear();

      return {
        dayNumber,
        month,
        dayName,
        monthName,
        year
      };
    };
    const innerText = (el, text) => {
      document.querySelector(el).innerText = text;
    };

    const { dayNumber, month, dayName, monthName, year } = getActualDate(lang);
    innerText("#monthName", monthName);
    innerText("#dayName", dayName);
    innerText("#dayNumber", dayNumber);
    innerText("#year", year);


  }

  className() {
    return 'simple-calendar-widget AfruxWidgets-Widget--flat';
  }

  icon() {
    // Widget icon.
    return 'far fa-calendar-alt';
  }


  content() {
    const isLoading = app.translator.trans('justoverclock-simple-calendar-widget.forum.loading');
    return (
    <div class="calendar">
      <div id="monthName"></div>
      <div id="dayName"></div>
      <div id="dayNumber"></div>
      <div id="year"></div>
    </div>
    );
  }
}
