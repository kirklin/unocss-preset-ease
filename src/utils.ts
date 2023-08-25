/**
 * Converts a string to camelCase.
 * 将字符串转换为驼峰命名法。
 *
 * @param {string} str - The input string to be converted.
 *                      要转换的输入字符串。
 * @returns {string} Returns the camelCase version of the input string.
 *                   返回输入字符串的驼峰命名法版本。
 */
export function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a string to kebab-case.
 * 将字符串转换为 kebab-case 格式。
 *
 * @param {string} str - The input string to be converted.
 *                      要转换的输入字符串。
 * @returns {string} Returns the kebab-case version of the input string.
 *                   返回输入字符串的 kebab-case 格式版本。
 */
export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
