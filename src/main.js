import board from './keyboard'

window.keyboard = board;
if(ENV === 'development'){
  console.log(`[${ENV}] satarted!`)
  new window.keyboard()
}