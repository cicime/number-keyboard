'use strict'
export default function (e, config) {
  e.preventDefault()
  e.stopPropagation()

  const _this = this

  const init = () => {
    let ele = document.querySelector('.keyboard')
    if (ele) {
      ele.style.display = 'block'
      createFlash(_this.value)
      return
    }

    dom()

    document.onclick = function () {
      document.querySelector('.keyboard').style.display = 'none'
      removeFlash();
    };
  }

  const add = (e, txt) => {
    e.preventDefault();
    e.stopPropagation();
    _this.value += txt;
    !/^\d+\.?\d{0,2}$/.test(_this.value) && minus(e)
    createFlash(_this.value)
  }

  const minus = (e) => {
    e.preventDefault();
    e.stopPropagation();
    _this.value && (_this.value = _this.value.replace(/.$/, ''))
    createFlash(_this.value)
  }

  const createFlash = (txt) => {

    document.querySelector('.keyboard-txt-hk').innerHTML = txt || ''

    removeFlash();
    let newflash = document.createElement('sapn')
    newflash.className = 'keyboard-flash'
    newflash.innerHTML = '|'
    document.querySelector(config.mod).appendChild(newflash)
  };

  const removeFlash = () => {
    let flash = document.querySelector('.keyboard-flash');
    flash && document.querySelector(config.mod).removeChild(flash);
  };

  const dom = () => {
    const
        key = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [0, '.', 'back']
        ],
        html = document.createElement('div'),
        table = document.createElement('table')

    html.className = 'keyboard'
    table.className = 'keyboard-table'

    for (let i = 0; i < key.length; i++) {
      let row = document.createElement('tr')
      for (let j = 0; j < key[i].length; j++) {
        let td = document.createElement('td'),
            txt = key[i][j]
        td.innerHTML = txt
        td.className = 'keyboard-key'
        if (txt === 'back') {
          td.onclick = minus
        } else {
          td.onclick = e => {
            add(e, txt)
          }
        }
        row.appendChild(td)
      }
      table.appendChild(row)
    }

    html.appendChild(table)
    document.body.appendChild(html)

    createFlash()
  }

  init();
}