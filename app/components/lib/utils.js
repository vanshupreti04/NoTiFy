export function cn(...inputs) {
  return Array.from(
    new Set(
      inputs.flat().reduce((classes, input) => {
        if (!input) return classes; // Ignore falsy values (null, undefined, false, etc.)

        if (typeof input === "string") {
          return classes.concat(input.includes(" ") ? input.split(" ") : input);
        }

        if (typeof input === "object") {
          return classes.concat(
            Object.keys(input).filter((key) => input[key]) // Add only truthy class names
          );
        }

        return classes;
      }, [])
    )
  ).join(" ");
}
