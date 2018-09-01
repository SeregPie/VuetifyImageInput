# VuetifyImageInput

...

## demo

[Try it out!](https://seregpie.github.io/VuetifyImageInput/)

## dependencies

- [Vue](https://github.com/vuejs/vue)
- [vuetify](https://github.com/vuetifyjs/vuetify)

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

Register the component in the scope of another instance.

```javascript
import VImageInput from 'vuetify-image-input';

export default {
  // ...
  components: {
    [VImageInput.name]: VImageInput,
  },
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuetify"></script>
<script src="https://unpkg.com/vuetify-image-input"></script>
```

The component will be available under the name `VuetifyImageInput`. If Vue is detected, the component will be registered automatically.


#### properties

| property | type | default |
| ---: | :--- | :--- |
| `clearable` | `Boolean` | `false` |
| `flipHorizontallyTooltip` | `String` | `'flip horizontally'` |
| `flipVerticallyTooltip` | `String` | `'flip vertically'` |
| `imageEncoderOptions` | | |
| `imageHeight` | `Number` | `256` |
| `imageType` | `String` | `'png'` |
| `imageWidth` | `Number` | `256` |
| `notFlippable` | `Boolean` | `false` |
| `notRotatable` | `Boolean` | `false` |
| `rotateClockwiseTooltip` | `String` | `'rotate clockwise'` |
| `rotateCounterclockwiseTooltip` | `String` | `'rotate counterclockwise'` |
| `value` | `String` | |
