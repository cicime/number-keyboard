import board from './keyboard'

window.keyboard = board;
if(ENV === 'development'){
  console.log('[开发INGING] satarted!')
  new window.keyboard()
}