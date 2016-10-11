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
#### (Recommended)
```
<ul class="fc fc-col">
  <li class="fc-item">1</li>
  <li class="fc-item">2</li>
  <li class="fc-item fc-item-bottom">3</li>
  <li class="fc-item">4</li>
  <li class="fc-item">5</li>
  <li class="fc-item">6</li>
</ul>
```

## Class names

### `Container`
* **fc | flex**

### `flex-direction`
* **fc-row | flex-row** - (_default_) left to right in ltr; right to left in rtl

* **fc-row-reverse | flex-row-reverse** - right to left in ltr; left to right in rtl

* **fc-col | flex-column** - same as row but top to bottom

* **fc-col-reverse | flex-column-reverse** - same as row-reverse but bottom to top

### `flex-wrap`
* **fc-nowrap | flex-nowrap** - (_default_) single-line / left to right in ltr; right to left in rtl

### `Horizontal Alignment - justify-content`
* **fc-left | flex-justify-start** - (_default_) items are packed toward the start line

* **fc-right | flex-justify-end** - items are packed toward to end line

* **fc-center | flex-justify-center** - items are centered along the line

* **fc-between | flex-justify-space-between** - first item is on the start line, last item on the end line

* **fc-around | flex-justify-space-around** - first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies

### `Vertical Alignment - align-items`
* **fc-top | flex-align-start** - cross-start margin edge of the items is placed on the cross-start line

* **fc-bottom | flex-align-end** - cross-end margin edge of the items is placed on the cross-end line

* **fc-middle | flex-align-center** - items are centered in the cross-axis

* **fc-baseline | flex-align-baseline** - items are aligned such as their baselines align

* **fc-stretch | flex-align-stretch** - (_default_) stretch to fill the container (still respect min-width/max-width)

### `Items`
* **fc-item | flex-item**

### `align-self`
* This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
* **fc-item-top | flex-align-start**

* **fc-item-bottom | flex-align-end**

* **fc-item-middle | flex-align-center**

* **fc-item-baseline | flex-align-baseline**

* **fc-item-stretch | flex-align-stretch**
