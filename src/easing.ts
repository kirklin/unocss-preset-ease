/**
 * These easing functions provide various cubic bezier curves that can be used for animations and transitions.
 * 这些缓动函数提供了各种可用于动画和过渡的贝塞尔曲线。
 * see https://easings.net for visual representation and usage examples.
 * 可以访问 https://easings.net 查看可视化表示和使用示例。
 */

// CSS
export const css = "ease";

export const cssIn = "ease-in";

export const cssOut = "ease-out";

export const cssInOut = "ease-in-out";

/**
 * Easing function for smooth entrance.
 * 平滑入场的缓动函数。
 */
export const inSine = "cubic-bezier(0.12, 0, 0.39, 0)";

export const inCubic = "cubic-bezier(0.32, 0, 0.67, 0)";

export const inQuint = "cubic-bezier(0.64, 0, 0.78, 0)";

export const inCirc = "cubic-bezier(0.55, 0, 1, 0.45)";

export const inQuad = "cubic-bezier(0.11, 0, 0.5, 0)";

export const inQuart = "cubic-bezier(0.5, 0, 0.75, 0)";

export const inExpo = "cubic-bezier(0.7, 0, 0.84, 0)";

export const inBack = "cubic-bezier(0.36, 0, 0.66, -0.56)";

/**
 * Easing function for smooth exit.
 * 平滑退出的缓动函数。
 */
export const outSine = "cubic-bezier(0.61, 1, 0.88, 1)";

export const outCubic = "cubic-bezier(0.33, 1, 0.68, 1)";

export const outQuint = "cubic-bezier(0.22, 1, 0.36, 1)";

export const outCirc = "cubic-bezier(0, 0.55, 0.45, 1)";

export const outQuad = "cubic-bezier(0.5, 1, 0.89, 1)";

export const outQuart = "cubic-bezier(0.25, 1, 0.5, 1)";

export const outExpo = "cubic-bezier(0.16, 1, 0.3, 1)";

export const outBack = "cubic-bezier(0.34, 1.56, 0.64, 1)";

/**
 * Easing function for smooth entrance and exit.
 * 平滑入场和退出的缓动函数。
 */
export const inOutSine = "cubic-bezier(0.37, 0, 0.63, 1)";

export const inOutCubic = "cubic-bezier(0.65, 0, 0.35, 1)";

export const inOutQuint = "cubic-bezier(0.83, 0, 0.17, 1)";

export const inOutCirc = "cubic-bezier(0.85, 0, 0.15, 1)";

export const inOutQuad = "cubic-bezier(0.45, 0, 0.55, 1)";

export const inOutQuart = "cubic-bezier(0.76, 0, 0.24, 1)";

export const inOutExpo = "cubic-bezier(0.87, 0, 0.13, 1)";

export const inOutBack = "cubic-bezier(0.68, -0.6, 0.32, 1.6)";

/**
 * Easing functions for smooth animations and transitions.
 * 缓动函数用于实现平滑的动画和过渡效果。
 *
 */
export const easing = {
  // CSS
  css,
  cssIn,
  cssOut,
  cssInOut,

  /**
   * Easing function for smooth entrance.
   * 平滑入场的缓动函数。
   */
  inSine,
  inCubic,
  inQuint,
  inCirc,
  inQuad,
  inQuart,
  inExpo,
  inBack,

  /**
   * Easing function for smooth exit.
   * 平滑退出的缓动函数。
   */
  outSine,
  outCubic,
  outQuint,
  outCirc,
  outQuad,
  outQuart,
  outExpo,
  outBack,

  /**
   * Easing function for smooth entrance and exit.
   * 平滑入场和退出的缓动函数。
   */
  inOutSine,
  inOutCubic,
  inOutQuint,
  inOutCirc,
  inOutQuad,
  inOutQuart,
  inOutExpo,
  inOutBack,
};
