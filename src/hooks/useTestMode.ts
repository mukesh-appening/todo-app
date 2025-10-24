import { useEffect } from 'react';
import { autoEnableTestMode } from '../utils/testMode';

/**
 * Hook to automatically enable test mode when the app starts
 * This should be called once in the main App component
 */
export const useTestMode = (): void => {
  useEffect(() => {
    autoEnableTestMode();
  }, []);
};
