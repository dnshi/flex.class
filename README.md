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

### `Horizontal Alignment - justify-content`
* **align-left | flex-justify-start** - (_default_) items are packed toward the start line

* **align-right | flex-justify-end** - items are packed toward to end line

* **align-center | flex-justify-center** - items are centered along the line

* **align-justify | flex-justify-space-between** - first item is on the start line, last item on the end line

* **align-spaced | flex-justify-space-around** - first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies

### `Vertical Alignment - align-items`
* **align-top | flex-align-start** - cross-start margin edge of the items is placed on the cross-start line

* **align-bottom | flex-align-end** - cross-end margin edge of the items is placed on the cross-end line

* **align-middle | flex-align-center** - items are centered in the cross-axis

* **align-baseline | flex-align-baseline** - items are aligned such as their baselines align

* **align-stretch | flex-align-stretch** - (_default_) stretch to fill the container (still respect min-width/max-width)

### `Items`
* **flex-item**

### `align-self`
* This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
* **align-self-top | flex-align-start**

* **align-self-bottom | flex-align-end**

* **align-self-middle | flex-align-center**

* **align-self-baseline | flex-align-baseline**

* **align-self-stretch | flex-align-stretch**
