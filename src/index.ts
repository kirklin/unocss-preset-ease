import type { Preset } from "@unocss/core";
import { camelCase, kebabCase } from "./utils";
import { easing } from "./easing";
import type { EasePresetOptions } from "./types";

/**
 * Creates a preset that maps easing function names to transition timing functions.
 * 创建一个预设，将缓动函数名称映射到过渡时间函数。
 *
 * @param {EasePresetOptions} [options] - Options for configuring the easing preset.
 *                                      用于配置缓动预设的选项。
 * @returns {Preset} Returns a UnoCSS preset object.
 *                   返回 UnoCSS 预设对象。
 */
export const presetEase = ({ prefix = "ease-" }: EasePresetOptions = {}): Preset<any> => {
  const easingFunctionNames = Object.keys(easing)
    .map(name => kebabCase(name))
    .join("|");

  const easingFunctionSelector = `${prefix}(${easingFunctionNames})`;

  return {
    name: "unocss-preset-ease",
    rules: [
      [
        new RegExp(`^${easingFunctionSelector}$`),
        ([, name]) => ({
          "transition-timing-function": easing[camelCase(name) as keyof typeof easing],
        }),
      ],
    ],
    autocomplete: {
      templates: [easingFunctionSelector],
    },
  };
};

export * from "./types";
export * from "./easing";

export default presetEase;
