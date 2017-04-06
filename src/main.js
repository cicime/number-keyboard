import keyboard from './keyboard.plus'

$(function () {
  $.fn.extend({ keyboard })
  
  if (ENV === 'development') {
    console.log(`[${ENV}] satarted!`)
  }
})