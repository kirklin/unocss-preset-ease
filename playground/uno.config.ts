import { defineConfig, presetUno } from "unocss";
import presetEase from "../src/index";

export default defineConfig({
  presets: [
    presetUno(),
    presetEase(),
  ],
});
