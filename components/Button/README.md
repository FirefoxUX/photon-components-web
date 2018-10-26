# photon-buttons

## Styles

### Default

```html
  <a href="#" class="button">Anchor</a>
  <button>Button</button>
  <Button>Button</Button>
```

### Primary

```html
  <a href="#" class="button button--primary">Anchor</a>
  <button class="button--primary">Button</button>
  <Button type="primary"></Button>
```

### Ghost

```html
  <a href="#" class="button button--ghost" aria-label="refresh" style="background-image: url(../vendor/sync-16.svg)"></a>
  <button class="button button--ghost" aria-label="refresh" style="background-image: url(../vendor/sync-16.svg)"></button>
  <Button type="ghost" aria-label="refresh" style="background-image: url(../vendor/sync-16.svg)" />
```

## Sizes

### Micro

```html
  <a href="#" class="button button--micro">Anchor</a>
  <button class="button--micro">Button</button>
  <Button size="micro">Button</Button>

  <a href="#" class="button button--primary button--micro">Anchor</a>
  <button class="button--primary button--micro">Button</button>
  <Button type="primary" size="micro">Button</Button>
```

### Puffy

```html
  <a href="#" class="button button--puffy">Anchor</a>
  <button class="button--puffy">Button</button>
  <Button size="puffy">Button</Button>

  <a href="#" class="button button--primary button--puffy">Anchor</a>
  <button class="button--primary button--puffy">Button</button>
  <Button type="primary" size="puffy">Button</Button>
```

## States

### Disabled

```html
  <a href="#" class="button" aria-disabled>Anchor</a>
  <button disabled>Button</button>
  <Button disabled={true}>Button</Button>

  <a href="#" class="button button--primary" aria-disabled>Anchor</a>
  <button class="button--primary" disabled>Button</button>
  <Button type="primary" disabled={true}>Button</Button>

  <a href="#" class="button button--ghost" aria-label="refresh" aria-disabled style="background-image: url(../vendor/sync-16.svg)"></a>
  <button class="button button--ghost" aria-label="refresh" disabled style="background-image: url(../vendor/sync-16.svg)"></button>
    <Button type="ghost" aria-label="refresh" disabled style="background-image: url(../vendor/sync-16.svg)" />
```
