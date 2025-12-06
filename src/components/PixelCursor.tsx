import { useEffect } from "react";
import cursorPng from "@/assets/Design/cursor.png";

export default function PixelCursor() {
  useEffect(() => {
    // Save previous cursor so we can restore it
    const prev = document.documentElement.style.cursor || "";
    // Set native cursor to the provided PNG. Hotspot set approximately to center (22 22)
    try {
      document.documentElement.style.cursor = `url(${cursorPng}) 22 22, auto`;
    } catch (e) {
      // ignore
    }

    return () => {
      document.documentElement.style.cursor = prev;
    };
  }, []);

  // No DOM element needed — rely on native cursor
  return null;
}
