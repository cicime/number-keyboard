# number-keyboard
- mobile number keyboard
- need jquery or zepto

## use

```
  <link rel="stylesheet" href="keyboard.min.css">
  <script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>
  <script src="keyboard.min.js"></script>

  $('.modinput').keyboard('.input-hk').on('kb.tap', function (e, value) {
      console.log('kb.tap:' + value)
  })
```

![](./src/0.png)