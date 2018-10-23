# photon-message-bars

## Styles

### Default

```html
  <div class="messageBar messageBar--generic">
    <span class="icon"></span>
    <p class="message">This is my message</p>
    <a href="#" class="btn">call to action</a>
    <span class="close"></span>
  </div>
```

``` html
  const callToActionEl = <a href="#" class="btn">call to action</a>

  <MessageBar type={"generic"} dismissable={true}
              message="This is my message" callToAction={callToActionEl} />
```

### Success

```html
  <div class="messageBar messageBar--generic">
    <span class="icon"></span>
    <p class="message">This is my message</p>
    <a href="#" class="btn">call to action</a>
    <span class="close"></span>
  </div>
```

### Warning

```html
  <div class="messageBar messageBar--warning">
    <span class="icon"></span>
    <p class="message">This is my message</p>
    <a href="#" class="btn">call to action</a>
    <span class="close"></span>
  </div>
```

### Error

```html
  <div class="messageBar messageBar--error">
    <span class="icon"></span>
    <p class="message">This is my message</p>
    <a href="#" class="btn">call to action</a>
    <span class="close"></span>
  </div>
```
