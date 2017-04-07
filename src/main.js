import keyboard from './keyboard'

$(function () {
  $.fn.extend({ keyboard })
  
  if (ENV === 'development') {
    console.log(`[${ENV}] satarted!`)
  }
})