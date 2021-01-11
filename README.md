# VuetifyImageInput

Provides basic image editing tools.

## demo

[Try it out!](https://seregpie.github.io/VuetifyImageInput/)

## dependencies

- [chroma.js](https://github.com/gka/chroma.js)

## setup

### npm

```shell
npm i vuetify-image-input
```

---

```javascript
import VuetifyImageInput from 'vuetify-image-input';
```

---

Use the treeshaking system.

```javascript
import VuetifyImageInput from 'vuetify-image-input/a-la-carte';
```

### browser

```html
<link
  href="https://unpkg.com/vuetify@2/dist/vuetify.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/vuetify@2/dist/vuetify.min.js"></script>
<script src="https://unpkg.com/vuetify-image-input"></script>
```

The component is globally available as `VuetifyImageInput`. If Vue is detected, the component is registered automatically.

## usage

Register the component globally.

```javascript
import Vue from 'vue';
import VImageInput from 'vuetify-image-input';

Vue.component(VImageInput.name, VImageInput);
```

*or*

Register the component locally.

```javascript
import VImageInput from 'vuetify-image-input';

export default {
  components: {
    VImageInput,
  },
  // ...
};
```
