# Input Fields

Input fields allow users to add text within a defined area.

## Styles

### Default

React
```html
<Input placeholder="This is a placeholder" />
```

Plain HTML
```html
<label class="input">
    <input type="text" class="input__field" placeholder="This is a placeholder" />
</label>
```

### Label

React
```html
<Input label="Labelled field" placeholder="This is a placeholder" />
```

Plain HTML
```html
<label class="input">
    <span class="input__label">Labelled field</span>
    <input type="text" class="input__field" placeholder="This is a placeholder" />
</label>
```

### Behaviors

#### Password

React
```html
<Input type="password" placeholder="Password" value="hunter23" />
```

Plain HTML
```html
<label class="input">
    <input type="password" class="input__field" placeholder="Password" value="hunter23" />
    <span class="input__passwordVisibility">
        <span class="input__passwordVisibility__hidden">👁</span>
    </span>
</label>
```

**Note**: To implement password visibility toggle, the
`input__passwordVisibility` span should be used with a click event handler that
toggles the input type between `password` and `text`. (The React component does
this.)

#### Warning

React
```html
<Input warning={true} placeholder="Warning" />
```

Plain HTML
```html
<label class="input input--warning">
    <input type="text" class="input__field input--warning__field" placeholder="Warning" />
</label>
```

#### Error

React
```html
<Input error={true} placeholder="Error" />
```

Plain HTML
```html
<label class="input input--error">
    <input type="text" class="input__field input--error__field" placeholder="Error" />
</label>
```

### Icons

React
```html
<Input icon={searchIcon} placeholder="This field has an icon" />
```

Plain HTML
```html
<label style="--icon:url(./path/to/icon.svg)" class="input input--icon">
    <input type="text" class="input__field input--icon__field" placeholder="This is a placeholder" />
</label>
```
