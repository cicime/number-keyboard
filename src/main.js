import board from './keyboard'

window.keyboard = board;
if (ENV === 'development') {
  console.log(`[${ENV}] satarted!`)

  document.querySelector('.input-hk').onclick = function (e) {
    keyboard.bind(this)(e);
  };
}