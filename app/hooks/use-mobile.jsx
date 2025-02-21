import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  const [isMobile, setIsMobile] = useState(mql.matches);

  useEffect(() => {
    const onChange = (event) => setIsMobile(event.matches);

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mql]);

  return isMobile;
}
