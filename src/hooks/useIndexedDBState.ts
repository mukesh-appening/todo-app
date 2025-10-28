import { useState, useEffect, useCallback } from "react";
import { indexedDBStorage } from "../utils/indexedDBStorage";

/**
 * A custom React hook that returns a stateful value and a function to update it, and persists the value in IndexedDB.
 * This is more reliable than localStorage for testing environments where storage might get cleared.
 * @param {any} defaultValue - The default value for the state.
 * @param {string} key - The key under which the value will be stored.
 * @returns {[any, Function]} A tuple containing the current state value and a function to update it.
 * @example const [count, setCount] = useIndexedDBState(1, "count");
 */
export function useIndexedDBState<T>(
  defaultValue: T,
  key: string,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(defaultValue);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize state with the stored value from IndexedDB
  useEffect(() => {
    let mounted = true;

    indexedDBStorage.getItem(key).then((storedValue) => {
      if (!mounted) return;

      if (storedValue !== null && storedValue !== undefined && storedValue !== "undefined") {
        try {
          const parsedValue = JSON.parse(storedValue);
          setValue(parsedValue);
        } catch (error) {
          console.error(`Failed to parse stored value for key "${key}":`, error);
        }
      }
      setIsInitialized(true);
    });

    return () => {
      mounted = false;
    };
  }, [key]);

  // Update IndexedDB whenever the value changes (but only after initialization)
  useEffect(() => {
    if (!isInitialized) return;

    indexedDBStorage.setItem(key, JSON.stringify(value)).catch((error) => {
      console.error(`Failed to save value for key "${key}" to IndexedDB:`, error);
    });
  }, [key, value, isInitialized]);

  // Return the state value and update function
  return [value, setValue];
}

/**
 * Hook that reads from localStorage first (for migration), then uses IndexedDB
 * This helps with backward compatibility
 */
export function useStorageStateWithFallback<T>(
  defaultValue: T,
  key: string,
  prefer: "indexedDB" | "localStorage" = "indexedDB",
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [indexedDBValue, setIndexedDBValue] = useIndexedDBState(defaultValue, key);
  const [currentValue, setCurrentValue] = useState<T>(defaultValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Try to migrate from localStorage if needed
    const localValue = localStorage.getItem(key);
    if (localValue && prefer === "indexedDB") {
      try {
        const parsedValue = JSON.parse(localValue);
        // Migrate to IndexedDB
        indexedDBStorage.setItem(key, localValue);
        setIndexedDBValue(parsedValue);
      } catch (error) {
        console.error(`Failed to migrate value from localStorage to IndexedDB:`, error);
      }
    }
    setIsInitialized(true);
  }, [key, prefer]);

  const setValue = useCallback<React.Dispatch<React.SetStateAction<T>>>(
    (newValue) => {
      setCurrentValue(newValue);
      setIndexedDBValue(newValue);
    },
    [setIndexedDBValue],
  );

  if (isInitialized) {
    return [indexedDBValue, setIndexedDBValue];
  }

  return [currentValue, setValue];
}
