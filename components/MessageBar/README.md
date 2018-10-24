# photon-message-bars

## Styles

### Default

``` html
  const callToActionEl = <a href="#" class="btn">call to action</a>

  <MessageBar type={"generic"} message="This is my message"
              callToAction={callToActionEl}
              onDismiss={() => this.setState({showMessage: false})}
    />
```

Only using html and provided css classes:

```html
  <div class="messageBar messageBar--generic">
    <span class="icon"></span>
    <p class="message">This is my message</p>
    <a href="#" class="btn">call to action</a>
    <span class="close"></span>
  </div>
```

### Success

```html
  const callToActionEl = <a href="#" class="btn">call to action</a>

  <MessageBar type={"success"} message="This is my message"
              callToAction={callToActionEl}
              onDismiss={() => this.setState({showMessage: false})}
    />
```

### Warning

```html

  const callToActionEl = <a href="#" class="btn">call to action</a>

  <MessageBar type={"warning"} message="This is my message"
              callToAction={callToActionEl}
              onDismiss={() => this.setState({showMessage: false})}
    />
```

### Error

```html
  const callToActionEl = <a href="#" class="btn">call to action</a>

  <MessageBar type={"error"} message="This is my message"
              callToAction={callToActionEl}
              onDismiss={() => this.setState({showMessage: false})}
    />
```

## Options

### `type`

Determines the style of your `MessageBox`

options:
* `generic`
* `success`
* `warning`
* `error`

### `message`

The text of your `MessageBox`

### `onDismiss`

a function which is passed to the close button's `onClick` method. If left off
the message bar will not have a close button.

a common pattern used on the testpilot project is to have a state like `showMessageBar`
in the parent component's render method, and to set it to false in the `onDismiss` method.

``` js
// render method in a parent component
render: function () {
  return (
    <div className="header">
      <h1>Mozilla</h1>
      {this.state.showMessage ? <MessageBar type={"error"} message="This is my message"
                                            onDismiss={() => this.setState({showMessage: false})} /> : null }
    </div>
  );
}

```

### `callToAction`

`callToAction` is an optional prop of a button element.

``` js
const myCallToActionEl = <button class="button--minor" onClick={this.handleCallToAction}>Call to action</button>

<MessageBar type={"error"} message="This is my message" callToAction={myCallToActionEl} />

```