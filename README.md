# easyMQ
:checkered_flag: A way to use media query easily, cross browsing and faster. Without CSS.

## Easy to use
Add to the HTML element, who want to affect the media query, the attribute 
```
data-easyMQ="media-query-type|break-point|css-snippet"
```
example
```html
<div data-easyMQ="max-width|750px|background-color: red;">text or other</div>
```

## Fully compatible
Browser:
  - Internet Explorer 10
  - Opera 15
  - Safari 7.1
  - Google Chrome
  - Firefox

Device:
  - iOS 5.1 (iPhone 4)
  - Android 4.4 (Samsung s3)
  
*(If you want to help the project send issues or pull request with your browser/device testing)*

## More faster than CSS
See the chart:

  - **1 item**: response in *0.116ms*
  - **10 items**: response in *0.393ms*
  - **100 items**: response in *1.84ms*
  - **1000 items**: response in *13.95ms*

![Response Test](https://s13.postimg.org/lh3fw5a93/test.png)
