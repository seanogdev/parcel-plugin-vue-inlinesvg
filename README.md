# parcel-plugin-vue-inlinesvg

This plugin allows you to import an SVG file and use it directly with Vue, using the [Parcel.js](https://parceljs.org) bundler. The SVG itself is rendered inline.

This plugin also minifies and optimizes the SVG through [SVGO](https://github.com/svg/svgo).

**Note** You must install [parcel-plugin-vue](https://github.com/BoltDoggy/parcel-plugin-vue) in order to use this plugin.

## Installation
Install this package via npm

```
npm i -D parcel-plugin-vue-inlinesvg parcel-plugin-vue
```

## Usage

When starting the Parcel bundler you should run it with the `--no-cache` argument

In your Vue component, import thie SVG directly as if it were any other ES module.

```
<template>
  <div>
    <logo />
  </div>
</template>

<script>
  import Logo from '/assets/logo.svg';

  export default {
    components: {
      Logo,
    }
    data() {
    }
  }
</script>

```


## TODO

- Allow custom [SVGO configuration](https://github.com/svg/svgo) via an SVGO config file or inside `package.json`
- **Tests**


