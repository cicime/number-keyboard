'use strict'
export default function (config) {
  let ele = document.querySelector('.keyboard')
  if (ele) {
    ele.style.display = 'block'
    return
  }

  const
      _this = this,
      cfg = Object.assign({}, config),
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

  const add = (txt) => {
    _this.value += txt
  }

  const minus = () => {
    _this.value && (_this.value = _this.value.replace(/.$/,''))
  }

  for (let i = 0; i < key.length; i++) {
    let row = document.createElement('tr')
    for (let j = 0; j < key[i].length; j++) {
      let td = document.createElement('td'),
          txt = key[i][j]
      td.innerHTML = txt
      td.className = 'keyboard-key'
      if(txt === 'back'){
        td.onclick = minus
      }else{
        td.onclick = add.bind(this, txt)
      }
      row.appendChild(td)
    }
    table.appendChild(row)
  }

  html.appendChild(table)
  document.body.appendChild(html)
}