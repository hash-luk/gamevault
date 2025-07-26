import { useState, useEffect, useCallback } from "react";

export function useMediaQuery(query: string): boolean {
  const getMatches = useCallback((query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => {
      setMatches(getMatches(query));
    };

    matchMedia.addEventListener("change", handleChange);

    setMatches(getMatches(query));

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query, getMatches]);

  return matches;
}
