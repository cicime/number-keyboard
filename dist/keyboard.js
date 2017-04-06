(function () {
'use strict';

var keyboard = function (numInput) {
  var _this = this,
      _tip = this.html(),
      _input = $(numInput)[0],
      touch = 'touchend click';

  var dep = function dep(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  var _init = function _init(e) {
    dep(e);
    createFlash(_input.value);
    $('.keyboard-hk').show();
    $('.keyboard-txt-hod').hide();
  };

  var add = function add(e) {
    dep(e);
    _input.value += e.data.txt;
    !/^\d+\.?\d{0,2}$/.test(_input.value) && minus(e);
    createFlash(_input.value);
  };

  var minus = function minus(e) {
    dep(e);
    _input.value && (_input.value = _input.value.replace(/.$/, ''));
    createFlash(_input.value);
  };

  var createFlash = function createFlash(val) {
    $('.keyboard-txt-hk').html(val || '');
    !$('.keyboard-flash').length && _this.append('<span class="keyboard-flash">|</span>');
    _this.trigger('kb.tap');
  };

  var removeFlash = function removeFlash() {
    return $('.keyboard-flash').remove();
  };

  var dom = function dom() {
    var key = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', 'back']],
        html = $('<div class="keyboard keyboard-hk" hidden></div>'),
        table = $('<table class="keyboard-table"></table>');

    for (var i = 0; i < key.length; i++) {
      var row = $('<tr></tr>');
      for (var j = 0; j < key[i].length; j++) {
        var txt = key[i][j],
            td = $('<td class="keyboard-key">' + txt + '</td>');
        txt === 'back' ? td.on(touch, minus) : td.on(touch, { txt: txt }, add);
        row.append(td);
      }
      table.append(row);
    }
    html.append(table);
    $('body').append(html);

    _this.html('');
    _this.append('<span class="keyboard-txt-hk"></span>');
    _this.append('<span class="keyboard-txt-hod">' + _tip + '</span>');
  };

  dom();

  _this.on(touch, _init);
  $(document).on(touch, function () {
    removeFlash();
    $('.keyboard-hk').hide();
    !_input.value && $('.keyboard-txt-hod').show();
  });

  return this;
};

$(function () {
  $.fn.extend({ keyboard: keyboard });

  {
    console.log('[' + "development" + '] satarted!');
  }
});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9rZXlib2FyZC5wbHVzLmpzIiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobnVtSW5wdXQpIHtcclxuICBjb25zdFxyXG4gICAgICBfdGhpcyA9IHRoaXMsXHJcbiAgICAgIF90aXAgPSB0aGlzLmh0bWwoKSxcclxuICAgICAgX2lucHV0ID0gJChudW1JbnB1dClbMF0sXHJcbiAgICAgIHRvdWNoID0gJ3RvdWNoZW5kIGNsaWNrJ1xyXG5cclxuICBjb25zdCBkZXAgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBfaW5pdCA9IChlKSA9PiB7XHJcbiAgICBkZXAoZSlcclxuICAgIGNyZWF0ZUZsYXNoKF9pbnB1dC52YWx1ZSlcclxuICAgICQoJy5rZXlib2FyZC1oaycpLnNob3coKVxyXG4gICAgJCgnLmtleWJvYXJkLXR4dC1ob2QnKS5oaWRlKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZCA9IChlKSA9PiB7XHJcbiAgICBkZXAoZSlcclxuICAgIF9pbnB1dC52YWx1ZSArPSBlLmRhdGEudHh0XHJcbiAgICAhL15cXGQrXFwuP1xcZHswLDJ9JC8udGVzdChfaW5wdXQudmFsdWUpICYmIG1pbnVzKGUpXHJcbiAgICBjcmVhdGVGbGFzaChfaW5wdXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtaW51cyA9IChlKSA9PiB7XHJcbiAgICBkZXAoZSlcclxuICAgIF9pbnB1dC52YWx1ZSAmJiAoX2lucHV0LnZhbHVlID0gX2lucHV0LnZhbHVlLnJlcGxhY2UoLy4kLywgJycpKVxyXG4gICAgY3JlYXRlRmxhc2goX2lucHV0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlRmxhc2ggPSAodmFsKSA9PiB7XHJcbiAgICAkKCcua2V5Ym9hcmQtdHh0LWhrJykuaHRtbCh2YWwgfHwgJycpXHJcbiAgICAhJCgnLmtleWJvYXJkLWZsYXNoJykubGVuZ3RoICYmIF90aGlzLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJrZXlib2FyZC1mbGFzaFwiPnw8L3NwYW4+JylcclxuICAgIF90aGlzLnRyaWdnZXIoJ2tiLnRhcCcpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGbGFzaCA9ICgpID0+ICQoJy5rZXlib2FyZC1mbGFzaCcpLnJlbW92ZSgpO1xyXG5cclxuICBjb25zdCBkb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIGtleSA9IFtcclxuICAgICAgICAgIFsxLCAyLCAzXSxcclxuICAgICAgICAgIFs0LCA1LCA2XSxcclxuICAgICAgICAgIFs3LCA4LCA5XSxcclxuICAgICAgICAgIFswLCAnLicsICdiYWNrJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGh0bWwgPSAkKCc8ZGl2IGNsYXNzPVwia2V5Ym9hcmQga2V5Ym9hcmQtaGtcIiBoaWRkZW4+PC9kaXY+JyksXHJcbiAgICAgICAgdGFibGUgPSAkKCc8dGFibGUgY2xhc3M9XCJrZXlib2FyZC10YWJsZVwiPjwvdGFibGU+JylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgcm93ID0gJCgnPHRyPjwvdHI+JylcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsZXQgdHh0ID0ga2V5W2ldW2pdLFxyXG4gICAgICAgICAgICB0ZCA9ICQoJzx0ZCBjbGFzcz1cImtleWJvYXJkLWtleVwiPicgKyB0eHQgKyAnPC90ZD4nKVxyXG4gICAgICAgIHR4dCA9PT0gJ2JhY2snID8gdGQub24odG91Y2gsIG1pbnVzKSA6IHRkLm9uKHRvdWNoLCB7dHh0fSwgYWRkKVxyXG4gICAgICAgIHJvdy5hcHBlbmQodGQpXHJcbiAgICAgIH1cclxuICAgICAgdGFibGUuYXBwZW5kKHJvdylcclxuICAgIH1cclxuICAgIGh0bWwuYXBwZW5kKHRhYmxlKVxyXG4gICAgJCgnYm9keScpLmFwcGVuZChodG1sKVxyXG5cclxuICAgIF90aGlzLmh0bWwoJycpXHJcbiAgICBfdGhpcy5hcHBlbmQoJzxzcGFuIGNsYXNzPVwia2V5Ym9hcmQtdHh0LWhrXCI+PC9zcGFuPicpXHJcbiAgICBfdGhpcy5hcHBlbmQoJzxzcGFuIGNsYXNzPVwia2V5Ym9hcmQtdHh0LWhvZFwiPicgKyBfdGlwICsgJzwvc3Bhbj4nKVxyXG4gIH1cclxuXHJcbiAgZG9tKCk7XHJcblxyXG4gIF90aGlzLm9uKHRvdWNoLCBfaW5pdClcclxuICAkKGRvY3VtZW50KS5vbih0b3VjaCwgKCkgPT4ge1xyXG4gICAgcmVtb3ZlRmxhc2goKVxyXG4gICAgJCgnLmtleWJvYXJkLWhrJykuaGlkZSgpXHJcbiAgICAhX2lucHV0LnZhbHVlICYmICQoJy5rZXlib2FyZC10eHQtaG9kJykuc2hvdygpXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59OyIsImltcG9ydCBrZXlib2FyZCBmcm9tICcuL2tleWJvYXJkLnBsdXMnXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAkLmZuLmV4dGVuZCh7IGtleWJvYXJkIH0pXHJcbiAgXHJcbiAgaWYgKEVOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgY29uc29sZS5sb2coYFske0VOVn1dIHNhdGFydGVkIWApXHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJudW1JbnB1dCIsIl90aGlzIiwiX3RpcCIsImh0bWwiLCJfaW5wdXQiLCIkIiwidG91Y2giLCJkZXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJfaW5pdCIsInZhbHVlIiwic2hvdyIsImhpZGUiLCJhZGQiLCJkYXRhIiwidHh0IiwidGVzdCIsIm1pbnVzIiwicmVwbGFjZSIsImNyZWF0ZUZsYXNoIiwidmFsIiwibGVuZ3RoIiwiYXBwZW5kIiwidHJpZ2dlciIsInJlbW92ZUZsYXNoIiwicmVtb3ZlIiwiZG9tIiwia2V5IiwidGFibGUiLCJpIiwicm93IiwiaiIsInRkIiwib24iLCJkb2N1bWVudCIsImZuIiwiZXh0ZW5kIiwia2V5Ym9hcmQiLCJFTlYiLCJsb2ciXSwibWFwcGluZ3MiOiI7OztBQUNBLGVBQWUsVUFBVUEsUUFBVixFQUFvQjtNQUU3QkMsUUFBUSxJQURaO01BRUlDLE9BQU8sS0FBS0MsSUFBTCxFQUZYO01BR0lDLFNBQVNDLEVBQUVMLFFBQUYsRUFBWSxDQUFaLENBSGI7TUFJSU0sUUFBUSxnQkFKWjs7TUFNTUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLENBQUQsRUFBTztNQUNmQyxjQUFGO01BQ0VDLGVBQUY7R0FGRjs7TUFLTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNILENBQUQsRUFBTztRQUNmQSxDQUFKO2dCQUNZSixPQUFPUSxLQUFuQjtNQUNFLGNBQUYsRUFBa0JDLElBQWxCO01BQ0UsbUJBQUYsRUFBdUJDLElBQXZCO0dBSkY7O01BT01DLE1BQU0sU0FBTkEsR0FBTSxDQUFDUCxDQUFELEVBQU87UUFDYkEsQ0FBSjtXQUNPSSxLQUFQLElBQWdCSixFQUFFUSxJQUFGLENBQU9DLEdBQXZCO0tBQ0Msa0JBQWtCQyxJQUFsQixDQUF1QmQsT0FBT1EsS0FBOUIsQ0FBRCxJQUF5Q08sTUFBTVgsQ0FBTixDQUF6QztnQkFDWUosT0FBT1EsS0FBbkI7R0FKRjs7TUFPTU8sUUFBUSxTQUFSQSxLQUFRLENBQUNYLENBQUQsRUFBTztRQUNmQSxDQUFKO1dBQ09JLEtBQVAsS0FBaUJSLE9BQU9RLEtBQVAsR0FBZVIsT0FBT1EsS0FBUCxDQUFhUSxPQUFiLENBQXFCLElBQXJCLEVBQTJCLEVBQTNCLENBQWhDO2dCQUNZaEIsT0FBT1EsS0FBbkI7R0FIRjs7TUFNTVMsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBUztNQUN6QixrQkFBRixFQUFzQm5CLElBQXRCLENBQTJCbUIsT0FBTyxFQUFsQztLQUNDakIsRUFBRSxpQkFBRixFQUFxQmtCLE1BQXRCLElBQWdDdEIsTUFBTXVCLE1BQU4sQ0FBYSx1Q0FBYixDQUFoQztVQUNNQyxPQUFOLENBQWMsUUFBZDtHQUhGOztNQU1NQyxjQUFjLFNBQWRBLFdBQWM7V0FBTXJCLEVBQUUsaUJBQUYsRUFBcUJzQixNQUFyQixFQUFOO0dBQXBCOztNQUVNQyxNQUFNLFNBQU5BLEdBQU0sR0FBTTtRQUVaQyxNQUFNLENBQ0osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FESSxFQUVKLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRkksRUFHSixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhJLEVBSUosQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLE1BQVQsQ0FKSSxDQURWO1FBT0kxQixPQUFPRSxFQUFFLGlEQUFGLENBUFg7UUFRSXlCLFFBQVF6QixFQUFFLHdDQUFGLENBUlo7O1NBVUssSUFBSTBCLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsSUFBSU4sTUFBeEIsRUFBZ0NRLEdBQWhDLEVBQXFDO1VBQy9CQyxNQUFNM0IsRUFBRSxXQUFGLENBQVY7V0FDSyxJQUFJNEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixJQUFJRSxDQUFKLEVBQU9SLE1BQTNCLEVBQW1DVSxHQUFuQyxFQUF3QztZQUNsQ2hCLE1BQU1ZLElBQUlFLENBQUosRUFBT0UsQ0FBUCxDQUFWO1lBQ0lDLEtBQUs3QixFQUFFLDhCQUE4QlksR0FBOUIsR0FBb0MsT0FBdEMsQ0FEVDtnQkFFUSxNQUFSLEdBQWlCaUIsR0FBR0MsRUFBSCxDQUFNN0IsS0FBTixFQUFhYSxLQUFiLENBQWpCLEdBQXVDZSxHQUFHQyxFQUFILENBQU03QixLQUFOLEVBQWEsRUFBQ1csUUFBRCxFQUFiLEVBQW9CRixHQUFwQixDQUF2QztZQUNJUyxNQUFKLENBQVdVLEVBQVg7O1lBRUlWLE1BQU4sQ0FBYVEsR0FBYjs7U0FFR1IsTUFBTCxDQUFZTSxLQUFaO01BQ0UsTUFBRixFQUFVTixNQUFWLENBQWlCckIsSUFBakI7O1VBRU1BLElBQU4sQ0FBVyxFQUFYO1VBQ01xQixNQUFOLENBQWEsdUNBQWI7VUFDTUEsTUFBTixDQUFhLG9DQUFvQ3RCLElBQXBDLEdBQTJDLFNBQXhEO0dBMUJGOzs7O1FBK0JNaUMsRUFBTixDQUFTN0IsS0FBVCxFQUFnQkssS0FBaEI7SUFDRXlCLFFBQUYsRUFBWUQsRUFBWixDQUFlN0IsS0FBZixFQUFzQixZQUFNOztNQUV4QixjQUFGLEVBQWtCUSxJQUFsQjtLQUNDVixPQUFPUSxLQUFSLElBQWlCUCxFQUFFLG1CQUFGLEVBQXVCUSxJQUF2QixFQUFqQjtHQUhGOztTQU1PLElBQVA7OztBQzdFRlIsRUFBRSxZQUFZO0lBQ1ZnQyxFQUFGLENBQUtDLE1BQUwsQ0FBWSxFQUFFQyxrQkFBRixFQUFaOztFQUVJQyxBQUFKLEFBQTJCO1lBQ2pCQyxHQUFSLE9BQWdCRCxhQUFoQjs7Q0FKSjs7In0=
