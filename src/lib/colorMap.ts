export const colorHex: Record<string, string> = {
  red: "#F23030",
  blue: "#3C50E0",
  orange: "#F27430",
  pink: "#EC4899",
  purple: "#A855F7",
  black: "#1C274C",
  silver: "#9CA3AF",
  gray: "#6B7280",
  grey: "#6B7280",
  cream: "#FEF3C7",
  natural: "#D4A574",
  clear: "#E5E7EB",
  white: "#FFFFFF",
  green: "#22AD5C",
};

export function getColorHex(name: string): string {
  return colorHex[name.toLowerCase()] ?? "#9CA3AF";
}
