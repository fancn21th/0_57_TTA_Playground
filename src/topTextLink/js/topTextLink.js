$(function (win, $) {
  'use strict'
  // template replacement augment method
  if (typeof String.prototype.supplant !== 'function') {
    String.prototype.supplant = function (o) {
      return this.replace(
        /{([^{}]*)}/g,
        function (a, b) {
          var r = o[b] || '&nbsp;';
          return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
      );
    };
  }

  var topTextLink = function (config) {
    var that = {}

    that.init = function () {
      $(document.body).prepend('<div class="topTextLink">{text}</div>'.supplant(config))
    }

    that.init()
    return that
  }
  win.topTextLink = topTextLink({
    text: 'Your comment'
  })
}(window, jQuery))
