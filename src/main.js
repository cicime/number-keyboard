import keyboard from './keyboard'

$(function () {
  $.extend($.fn, { keyboard })
  
  if (ENV === 'development') {
    console.log(`[${ENV}] satarted!`)
  }
})