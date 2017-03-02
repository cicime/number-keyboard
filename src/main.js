import board from './keyboard'

window.keyboard = board;
if(ENV === 'development'){
  console.log(`[${ENV}] satarted!`)

  let inp = document.querySelector('.input-hk')
  inp.onclick = window.keyboard
}