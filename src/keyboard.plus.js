'use strict';
export default function (numInput) {
  const
      _this = this,
      _input = $(numInput)[0],
      touch = 'touchend click'

  const dep = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const _init = (e) => {
    dep(e)
    createFlash(_input.value)
    $('.keyboard-hk').show()
  }

  const add = (e) => {
    dep(e)
    _input.value += e.data.txt
    !/^\d+\.?\d{0,2}$/.test(_input.value) && minus(e)
    createFlash(_input.value)
  }

  const minus = (e) => {
    dep(e)
    _input.value && (_input.value = _input.value.replace(/.$/, ''))
    createFlash(_input.value)
  }

  const createFlash = (val) => {
    $('.keyboard-txt-hk').html(val || '')
    !$('.keyboard-flash').length && _this.append('<span class="keyboard-flash">|</span>')
  }

  const removeFlash = () => $('.keyboard-flash').remove();

  const dom = () => {
    const
        key = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [0, '.', 'back']
        ],
        html = $('<div class="keyboard keyboard-hk" hidden></div>'),
        table = $('<table class="keyboard-table"></table>')

    for (let i = 0; i < key.length; i++) {
      let row = $('<tr></tr>')
      for (let j = 0; j < key[i].length; j++) {
        let txt = key[i][j],
            td = $('<td class="keyboard-key">' + txt + '</td>');
        txt === 'back' ? td.on(touch, minus) : td.on(touch, {txt}, add);
        row.append(td)
      }
      table.append(row)
    }
    html.append(table)
    $('body').append(html)

    _this.append('<span class="keyboard-txt-hk"></span>')
  }

  dom();

  _this.on(touch, _init)
  $(document).on(touch, () => {
    removeFlash()
    $('.keyboard-hk').hide()
  });

  return this;
};