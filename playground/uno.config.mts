import { defineConfig, presetUno } from "unocss";
import presetEase from "unocss-preset-ease";

export default defineConfig({
  presets: [
    presetUno(),
    presetEase(),
  ],
});
