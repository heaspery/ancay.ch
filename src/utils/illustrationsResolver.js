export default function resolveIllustration(name) {
  if (!name) return "";
  if (typeof name !== "string") return "";
  // if already a path or has extension, return as-is
  if (name.startsWith("http") || name.startsWith("/") || name.includes("."))
    return name;
  // try common extensions (png then jpg)
  try {
    return new URL(`../assets/${name}.png`, import.meta.url).href;
  } catch (e) {
    try {
      return new URL(`../assets/${name}.jpg`, import.meta.url).href;
    } catch (e2) {
      return "";
    }
  }
}