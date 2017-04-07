# number-keyboard
- mobile number keyboard
- need jquery

## use

```
  <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
  <link rel="stylesheet" href="keyboard.min.css">
  <script src="keyboard.min.js"></script>

  $('.modinput').keyboard('.input-hk').on('kb.tap', function (e, value) {
      console.log('kb.tap:' + value)
  })
```