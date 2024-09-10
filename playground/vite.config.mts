import { presetUno } from "unocss";
import { defineConfig } from "vite";
import UnoCSS from "@unocss/vite";
import presetEase from "unocss-preset-ease";

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetEase(),
      ],
    }),
  ],
});
