# Unocss Preset Ease

## Introduction
Unocss Preset Ease is a collection of easing utility classes designed to make it easy for you to add smooth and realistic animations to your projects using the UnoCss CSS framework. 
This preset provides a range of pre-defined easing functions that you can apply directly to your HTML elements to achieve more natural and lifelike animations.

## Install
To get started with Unocss Preset Ease, follow these simple steps:

### 1. Install Unocss
```bash
npm i -D unocss
```

### 2. Install Unocss Preset Ease
```bash
npm i -D unocss-preset-ease
```
### 3. Configure Unocss to use the Ease preset. 
In your project's Unocss configuration file (usually named ),
import the preset and add it to the section:`unocss.config.js`

```ts
// uno.config.ts
import presetEase from "unocss-preset-ease";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetEase(),
    // ...custom presets
  ],
});
```

## Usage
Unocss Preset Ease provides a variety of classes that you can apply directly to your HTML elements. 
These classes apply easing functions to various CSS properties to create smooth animations. Here's how you can use them:

```html
<div class="ease-in-out duration-300 transform-translate-y">
  This element will animate smoothly with an ease-in-out easing function when its Y position changes.
</div>
```

In this example, the  class applies an easing function that starts slow, accelerates in the middle,
and slows down again towards the end of the animation. 
The class specifies the animation duration in milliseconds, 
and the class indicates that the Y position of the element should be animated using a translation transformation.

## Easing Functions
Easing functions specify the rate of change of a parameter over time, allowing you to create more natural animations that mimic real-world motion. The available easing functions in this preset include:
- ease-in
- ease-out
- ease-in-out
- and more...


## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Kirk Lin](https://github.com/kirklin)
