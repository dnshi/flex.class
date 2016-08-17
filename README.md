[![npm](https://img.shields.io/npm/v/flex.class.svg?style=flat-square)](https://www.npmjs.com/package/flex.class) [![npm](https://img.shields.io/npm/dt/flex.class.svg?style=flat-square)](https://www.npmjs.com/package/flex.class) [![npm](https://img.shields.io/npm/l/flex.class.svg?style=flat-square)](https://www.npmjs.com/package/flex.class)

# flex.class
Using Flexbox through class names

## Install
```
npm install -S flex.class
```

## Usage
```
<ul class="flex flex-column">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item flex-align-end">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
```
or
```
<ul class="flex align-justify">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item align-self-bottom">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
```

## Class names

### `Container`
* **flex**

### `flex-direction`
* **flex-row** - (_default_) left to right in ltr; right to left in rtl

* **flex-row-reverse** - right to left in ltr; left to right in rtl

* **flex-column** - same as row but top to bottom

* **flex-column-reverse** - same as row-reverse but bottom to top

### `flex-wrap`
* **flex-nowrap** - (_default_) single-line / left to right in ltr; right to left in rtl

### `justify-content`
* **flex-justify-start | align-left** - (_default_) items are packed toward the start line

* **flex-justify-end | align-right** - items are packed toward to end line

* **flex-justify-center | align-center** - items are centered along the line

* **flex-justify-space-between | align-justify** - first item is on the start line, last item on the end line

* **flex-justify-space-around | align-spaced** - first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies

### `align-items`
* **flex-align-start | align-top** - cross-start margin edge of the items is placed on the cross-start line

* **flex-align-end | align-bottom** - cross-end margin edge of the items is placed on the cross-end line

* **flex-align-center | align-middle** - items are centered in the cross-axis

* **flex-align-baseline | align-baseline** - items are aligned such as their baselines align

* **flex-align-stretch | align-stretch** - (_default_) stretch to fill the container (still respect min-width/max-width)

### `Items`
* **flex-item**

### `align-self`
* This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
* **flex-align-start | align-self-top**

* **flex-align-end | align-self-bottom**

* **flex-align-center | align-self-middle**

* **flex-align-baseline | align-self-baseline**

* **flex-align-stretch | align-self-stretch**
