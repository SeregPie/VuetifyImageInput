# VuetifyImageInput

Provides basic image editing tools.

## demo

[Try it out!](https://seregpie.github.io/VuetifyImageInput/)

## dependencies

- [VueClaw](https://github.com/SeregPie/VueClaw)

## setup

### npm

```shell
npm install vuetify-image-input
```

### ES module

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
  /*...*/
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

The component will be available under the name `VuetifyImageInput`. If Vue is detected, the component will be registered automatically.

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
| `background-color` | `String` | | |
| `clear-icon` | [`Function`, `String`] | * | |
| `clearable` | `Boolean` | `false` | |
| `debounce` | `Number` | `0` | |
| `disabled` | `Boolean` | `false` | |
| `flip-horizontally-icon-style` | [`Function`, `Object`] | | |
| `flip-horizontally-icon` | [`Function`, `String`] | `'flip'` | |
| `flip-vertically-icon-style` | [`Function`, `Object`] | `{transform: 'rotate(90deg)'}` | |
| `flip-vertically-icon` | [`Function`, `String`] | `'flip'` | |
| `full-height` | `Boolean` | `false` | |
| `full-width` | `Boolean` | `false` | |
| `hide-actions` | `Boolean` | `false` | |
| `image-format` | `String` | `'png'` | |
| `image-height` | `Number` | `256` | |
| `image-quality` | | | |
| `image-width` | `Number` | `256` | |
| `max-scaling` | `Number` | `1` | |
| `min-scaling` | `String` | `'cover'` | Possible values are `'cover'` and `'contain'`. |
| `name` | `String` | | |
| `overlay-background-color` | [`Function`, `String`] | `'rgba(0,0,0,0.5)'` | |
| `overlay-border-color` | [`Function`, `String`] | `'#fff'` | |
| `overlay-border-width` | `String` | `'4px'` | |
| `overlay-padding` | `String` | `'50px'` | |
| `readonly` | `Boolean` | `false` | |
| `rotate-clockwise-icon-style` | [`Function`, `Object`] | `{transform: 'scaleX(-1)'}` | |
| `rotate-clockwise-icon` | [`Function`, `String`] | `'rotate_90_degrees_ccw'` | |
| `rotate-counterclockwise-icon-style` | [`Function`, `Object`] | | |
| `rotate-counterclockwise-icon` | [`Function`, `String`] | `'rotate_90_degrees_ccw'` | |
| `scaling-slider-color` | [`Function`, `String`] | | |
| `upload-icon-style` | [`Function`, `Object`] | | |
| `upload-icon` | [`Function`, `String`] | `'cloud_upload'` | |
| `value` | `String` | | |

---

```javascript
let clearIcon = function() {
  return this.$vuetify.icons.clear;
};
```

## todo

- Scale gesture.
- Scale the image if the container is too small.
- Input and output synchronization.
- Smooth image scaling.
- What about checkered background? Dark/light theme? Custom checkered background?
- Uploader component?
- Upload cross-origin images?
