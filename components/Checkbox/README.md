# photon-checkboxes

## Styles

### With label

The checkbox is contained within the label element in order to activate a
hidden checkbox overlaid with custom styling.

```html
<label class="checkbox">
    <input type="checkbox" class="checkbox__field" />
    <span class="checkbox__label">Example label</span>
</label>
```
### Without label

**Note:** Even without a visible text label, the checkbox component still
requires the markup for a label. This is used as an anchor to apply the custom
styling while keeping the checkbox accessible.

```html
<label class="checkbox">
    <input type="checkbox" class="checkbox__field" />
    <span class="checkbox__label"></span>
</label>
```
