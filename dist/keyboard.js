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

    $('.modinput').keyboard('.input-hk');
  }
});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9rZXlib2FyZC5wbHVzLmpzIiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobnVtSW5wdXQpIHtcclxuICBjb25zdFxyXG4gICAgICBfdGhpcyA9IHRoaXMsXHJcbiAgICAgIF90aXAgPSB0aGlzLmh0bWwoKSxcclxuICAgICAgX2lucHV0ID0gJChudW1JbnB1dClbMF0sXHJcbiAgICAgIHRvdWNoID0gJ3RvdWNoZW5kIGNsaWNrJ1xyXG5cclxuICBjb25zdCBkZXAgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBfaW5pdCA9IChlKSA9PiB7XHJcbiAgICBkZXAoZSlcclxuICAgIGNyZWF0ZUZsYXNoKF9pbnB1dC52YWx1ZSlcclxuICAgICQoJy5rZXlib2FyZC1oaycpLnNob3coKVxyXG4gICAgJCgnLmtleWJvYXJkLXR4dC1ob2QnKS5oaWRlKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZCA9IChlKSA9PiB7XHJcbiAgICBkZXAoZSlcclxuICAgIF9pbnB1dC52YWx1ZSArPSBlLmRhdGEudHh0XHJcbiAgICAhL15cXGQrXFwuP1xcZHswLDJ9JC8udGVzdChfaW5wdXQudmFsdWUpICYmIG1pbnVzKGUpXHJcbiAgICBjcmVhdGVGbGFzaChfaW5wdXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtaW51cyA9IChlKSA9PiB7XHJcbiAgICBkZXAoZSlcclxuICAgIF9pbnB1dC52YWx1ZSAmJiAoX2lucHV0LnZhbHVlID0gX2lucHV0LnZhbHVlLnJlcGxhY2UoLy4kLywgJycpKVxyXG4gICAgY3JlYXRlRmxhc2goX2lucHV0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlRmxhc2ggPSAodmFsKSA9PiB7XHJcbiAgICAkKCcua2V5Ym9hcmQtdHh0LWhrJykuaHRtbCh2YWwgfHwgJycpXHJcbiAgICAhJCgnLmtleWJvYXJkLWZsYXNoJykubGVuZ3RoICYmIF90aGlzLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJrZXlib2FyZC1mbGFzaFwiPnw8L3NwYW4+JylcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZsYXNoID0gKCkgPT4gJCgnLmtleWJvYXJkLWZsYXNoJykucmVtb3ZlKCk7XHJcblxyXG4gIGNvbnN0IGRvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAga2V5ID0gW1xyXG4gICAgICAgICAgWzEsIDIsIDNdLFxyXG4gICAgICAgICAgWzQsIDUsIDZdLFxyXG4gICAgICAgICAgWzcsIDgsIDldLFxyXG4gICAgICAgICAgWzAsICcuJywgJ2JhY2snXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaHRtbCA9ICQoJzxkaXYgY2xhc3M9XCJrZXlib2FyZCBrZXlib2FyZC1oa1wiIGhpZGRlbj48L2Rpdj4nKSxcclxuICAgICAgICB0YWJsZSA9ICQoJzx0YWJsZSBjbGFzcz1cImtleWJvYXJkLXRhYmxlXCI+PC90YWJsZT4nKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCByb3cgPSAkKCc8dHI+PC90cj4nKVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxldCB0eHQgPSBrZXlbaV1bal0sXHJcbiAgICAgICAgICAgIHRkID0gJCgnPHRkIGNsYXNzPVwia2V5Ym9hcmQta2V5XCI+JyArIHR4dCArICc8L3RkPicpXHJcbiAgICAgICAgdHh0ID09PSAnYmFjaycgPyB0ZC5vbih0b3VjaCwgbWludXMpIDogdGQub24odG91Y2gsIHt0eHR9LCBhZGQpXHJcbiAgICAgICAgcm93LmFwcGVuZCh0ZClcclxuICAgICAgfVxyXG4gICAgICB0YWJsZS5hcHBlbmQocm93KVxyXG4gICAgfVxyXG4gICAgaHRtbC5hcHBlbmQodGFibGUpXHJcbiAgICAkKCdib2R5JykuYXBwZW5kKGh0bWwpXHJcblxyXG4gICAgX3RoaXMuaHRtbCgnJylcclxuICAgIF90aGlzLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJrZXlib2FyZC10eHQtaGtcIj48L3NwYW4+JylcclxuICAgIF90aGlzLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJrZXlib2FyZC10eHQtaG9kXCI+JyArIF90aXAgKyAnPC9zcGFuPicpXHJcbiAgfVxyXG5cclxuICBkb20oKTtcclxuXHJcbiAgX3RoaXMub24odG91Y2gsIF9pbml0KVxyXG4gICQoZG9jdW1lbnQpLm9uKHRvdWNoLCAoKSA9PiB7XHJcbiAgICByZW1vdmVGbGFzaCgpXHJcbiAgICAkKCcua2V5Ym9hcmQtaGsnKS5oaWRlKClcclxuICAgICFfaW5wdXQudmFsdWUgJiYgJCgnLmtleWJvYXJkLXR4dC1ob2QnKS5zaG93KClcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07IiwiaW1wb3J0IGtleWJvYXJkIGZyb20gJy4va2V5Ym9hcmQucGx1cydcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICQuZm4uZXh0ZW5kKHsga2V5Ym9hcmQgfSlcclxuICBcclxuICBpZiAoRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgWyR7RU5WfV0gc2F0YXJ0ZWQhYClcclxuXHJcbiAgICAkKCcubW9kaW5wdXQnKS5rZXlib2FyZCgnLmlucHV0LWhrJylcclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbIm51bUlucHV0IiwiX3RoaXMiLCJfdGlwIiwiaHRtbCIsIl9pbnB1dCIsIiQiLCJ0b3VjaCIsImRlcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIl9pbml0IiwidmFsdWUiLCJzaG93IiwiaGlkZSIsImFkZCIsImRhdGEiLCJ0eHQiLCJ0ZXN0IiwibWludXMiLCJyZXBsYWNlIiwiY3JlYXRlRmxhc2giLCJ2YWwiLCJsZW5ndGgiLCJhcHBlbmQiLCJyZW1vdmVGbGFzaCIsInJlbW92ZSIsImRvbSIsImtleSIsInRhYmxlIiwiaSIsInJvdyIsImoiLCJ0ZCIsIm9uIiwiZG9jdW1lbnQiLCJmbiIsImV4dGVuZCIsImtleWJvYXJkIiwiRU5WIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7QUFDQSxlQUFlLFVBQVVBLFFBQVYsRUFBb0I7TUFFN0JDLFFBQVEsSUFEWjtNQUVJQyxPQUFPLEtBQUtDLElBQUwsRUFGWDtNQUdJQyxTQUFTQyxFQUFFTCxRQUFGLEVBQVksQ0FBWixDQUhiO01BSUlNLFFBQVEsZ0JBSlo7O01BTU1DLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxDQUFELEVBQU87TUFDZkMsY0FBRjtNQUNFQyxlQUFGO0dBRkY7O01BS01DLFFBQVEsU0FBUkEsS0FBUSxDQUFDSCxDQUFELEVBQU87UUFDZkEsQ0FBSjtnQkFDWUosT0FBT1EsS0FBbkI7TUFDRSxjQUFGLEVBQWtCQyxJQUFsQjtNQUNFLG1CQUFGLEVBQXVCQyxJQUF2QjtHQUpGOztNQU9NQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ1AsQ0FBRCxFQUFPO1FBQ2JBLENBQUo7V0FDT0ksS0FBUCxJQUFnQkosRUFBRVEsSUFBRixDQUFPQyxHQUF2QjtLQUNDLGtCQUFrQkMsSUFBbEIsQ0FBdUJkLE9BQU9RLEtBQTlCLENBQUQsSUFBeUNPLE1BQU1YLENBQU4sQ0FBekM7Z0JBQ1lKLE9BQU9RLEtBQW5CO0dBSkY7O01BT01PLFFBQVEsU0FBUkEsS0FBUSxDQUFDWCxDQUFELEVBQU87UUFDZkEsQ0FBSjtXQUNPSSxLQUFQLEtBQWlCUixPQUFPUSxLQUFQLEdBQWVSLE9BQU9RLEtBQVAsQ0FBYVEsT0FBYixDQUFxQixJQUFyQixFQUEyQixFQUEzQixDQUFoQztnQkFDWWhCLE9BQU9RLEtBQW5CO0dBSEY7O01BTU1TLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7TUFDekIsa0JBQUYsRUFBc0JuQixJQUF0QixDQUEyQm1CLE9BQU8sRUFBbEM7S0FDQ2pCLEVBQUUsaUJBQUYsRUFBcUJrQixNQUF0QixJQUFnQ3RCLE1BQU11QixNQUFOLENBQWEsdUNBQWIsQ0FBaEM7R0FGRjs7TUFLTUMsY0FBYyxTQUFkQSxXQUFjO1dBQU1wQixFQUFFLGlCQUFGLEVBQXFCcUIsTUFBckIsRUFBTjtHQUFwQjs7TUFFTUMsTUFBTSxTQUFOQSxHQUFNLEdBQU07UUFFWkMsTUFBTSxDQUNKLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREksRUFFSixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZJLEVBR0osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FISSxFQUlKLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxNQUFULENBSkksQ0FEVjtRQU9JekIsT0FBT0UsRUFBRSxpREFBRixDQVBYO1FBUUl3QixRQUFReEIsRUFBRSx3Q0FBRixDQVJaOztTQVVLLElBQUl5QixJQUFJLENBQWIsRUFBZ0JBLElBQUlGLElBQUlMLE1BQXhCLEVBQWdDTyxHQUFoQyxFQUFxQztVQUMvQkMsTUFBTTFCLEVBQUUsV0FBRixDQUFWO1dBQ0ssSUFBSTJCLElBQUksQ0FBYixFQUFnQkEsSUFBSUosSUFBSUUsQ0FBSixFQUFPUCxNQUEzQixFQUFtQ1MsR0FBbkMsRUFBd0M7WUFDbENmLE1BQU1XLElBQUlFLENBQUosRUFBT0UsQ0FBUCxDQUFWO1lBQ0lDLEtBQUs1QixFQUFFLDhCQUE4QlksR0FBOUIsR0FBb0MsT0FBdEMsQ0FEVDtnQkFFUSxNQUFSLEdBQWlCZ0IsR0FBR0MsRUFBSCxDQUFNNUIsS0FBTixFQUFhYSxLQUFiLENBQWpCLEdBQXVDYyxHQUFHQyxFQUFILENBQU01QixLQUFOLEVBQWEsRUFBQ1csUUFBRCxFQUFiLEVBQW9CRixHQUFwQixDQUF2QztZQUNJUyxNQUFKLENBQVdTLEVBQVg7O1lBRUlULE1BQU4sQ0FBYU8sR0FBYjs7U0FFR1AsTUFBTCxDQUFZSyxLQUFaO01BQ0UsTUFBRixFQUFVTCxNQUFWLENBQWlCckIsSUFBakI7O1VBRU1BLElBQU4sQ0FBVyxFQUFYO1VBQ01xQixNQUFOLENBQWEsdUNBQWI7VUFDTUEsTUFBTixDQUFhLG9DQUFvQ3RCLElBQXBDLEdBQTJDLFNBQXhEO0dBMUJGOzs7O1FBK0JNZ0MsRUFBTixDQUFTNUIsS0FBVCxFQUFnQkssS0FBaEI7SUFDRXdCLFFBQUYsRUFBWUQsRUFBWixDQUFlNUIsS0FBZixFQUFzQixZQUFNOztNQUV4QixjQUFGLEVBQWtCUSxJQUFsQjtLQUNDVixPQUFPUSxLQUFSLElBQWlCUCxFQUFFLG1CQUFGLEVBQXVCUSxJQUF2QixFQUFqQjtHQUhGOztTQU1PLElBQVA7OztBQzVFRlIsRUFBRSxZQUFZO0lBQ1YrQixFQUFGLENBQUtDLE1BQUwsQ0FBWSxFQUFFQyxrQkFBRixFQUFaOztFQUVJQyxBQUFKLEFBQTJCO1lBQ2pCQyxHQUFSLE9BQWdCRCxhQUFoQjs7TUFFRSxXQUFGLEVBQWVELFFBQWYsQ0FBd0IsV0FBeEI7O0NBTko7OyJ9
