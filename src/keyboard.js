'use strict'
export default function (config) {
  const cfg = Object.assign({}, config)

  const key = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, '.', 'back']
  ]

  const html = document.createElement('div'),
        table = document.createElement('table')
  html.className = 'keyboard'
  table.className = 'keyboard-table'

  for (let i = 0; i < key.length; i++) {
    let row = document.createElement('tr')
    for(let j = 0; j < key[i].length; j++){
      let td = document.createElement('td')
      td.innerHTML = key[i][j]
      td.className = 'keyboard-key'
      row.appendChild(td)
    }
    table.appendChild(row)
  }

  html.appendChild(table)
  document.body.appendChild(html)
}