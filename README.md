# VuetifyImageInput

Provides basic image editing tools.

## demo

[Try it out!](https://seregpie.github.io/VuetifyImageInput/)

## dependencies

- [VueClaw](https://github.com/SeregPie/VueClaw)

## setup

### npm

```shell
npm i vuetify-image-input
```

### es6

Register the component globally.

```javascript
import Vue from 'vue';
import VImageInput from 'vuetify-image-input';

Vue.component(VImageInput.name, VImageInput);
```

*or*

Register the component in the scope of another component.

```javascript
import VImageInput from 'vuetify-image-input';

export default {
  components: {
    [VImageInput.name]: VImageInput,
  },
};
```

### browser

```html
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/vuetify/dist/vuetify.min.js"></script>
<script src="https://unpkg.com/@seregpie/claw"></script>
<script src="https://unpkg.com/vueclaw"></script>
<script src="https://unpkg.com/vuetify-image-input"></script>
```

The component is globally available as `VuetifyImageInput`. If Vue is detected, the component is registered automatically.

## usage

```html
<v-image-input
  v-model="imageData"
  :image-quality="0.85"
  clearable
  image-format="jpeg"
/>
```

## properties

| property | type | default | description |
| ---: | :--- | :--- | :--- |
| `backgroundColor` | `String` | | |
| `clearable` | `Boolean` | `false` | |
| `clearIcon` | [`Function`, `String`] | * | |
| `debounce` | `Number` | `0` | |
| `disabled` | `Boolean` | `false` | |
| `flipHorizontallyIcon` | [`Function`, `String`] | `'flip'` | |
| `flipHorizontallyIconStyle` | [`Function`, `Object`] | | |
| `flipVerticallyIcon` | [`Function`, `String`] | `'flip'` | |
| `flipVerticallyIconStyle` | [`Function`, `Object`] | `{transform: 'rotate(90deg)'}` | |
| `fullHeight` | `Boolean` | `false` | |
| `fullWidth` | `Boolean` | `false` | |
| `hideActions` | `Boolean` | `false` | |
| `imageFormat` | `String` | `'png'` | |
| `imageHeight` | `Number` | `256` | |
| `imageQuality` | | | |
| `imageWidth` | `Number` | `256` | |
| `maxScaling` | `Number` | `1` | |
| `minScaling` | `String` | `'cover'` | Possible values are `'cover'` and `'contain'`. |
| `name` | `String` | | |
| `overlayBackgroundColor` | [`Function`, `String`] | `'rgba(0,0,0,0.5)'` | |
| `overlayBorderColor` | [`Function`, `String`] | `'#fff'` | |
| `overlayBorderWidth` | `String` | `'4px'` | |
| `overlayPadding` | `String` | `'50px'` | |
| `readonly` | `Boolean` | `false` | |
| `rotateClockwiseIcon` | [`Function`, `String`] | `'rotate_90_degrees_ccw'` | |
| `rotateClockwiseIconStyle` | [`Function`, `Object`] | `{transform: 'scaleX(-1)'}` | |
| `rotateCounterclockwiseIcon` | [`Function`, `String`] | `'rotate_90_degrees_ccw'` | |
| `rotateCounterclockwiseIconStyle` | [`Function`, `Object`] | | |
| `scalingSliderColor` | [`Function`, `String`] | | |
| `uploadIcon` | [`Function`, `String`] | `'cloud_upload'` | |
| `uploadIconStyle` | [`Function`, `Object`] | | |
| `value` | `String` | | |

---

```javascript
let clearIcon = function() {
  return this.$vuetify.icons.clear;
};
```
