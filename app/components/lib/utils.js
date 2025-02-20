export function cn(...inputs) {
  const classSet = new Set();

  inputs.flat().forEach((input) => {
    if (typeof input === "string") {
      input.split(" ").forEach((cls) => {
        if (cls) classSet.add(cls);
      });
    } else if (typeof input === "object" && input !== null) {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classSet.add(key);
      });
    }
  });

  return Array.from(classSet).join(" ");
}
