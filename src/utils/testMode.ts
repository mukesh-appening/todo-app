/**
 * Utility functions for detecting test mode and improving AI agent compatibility
 */

/**
 * Detects if the application is running in a test environment
 * @returns {boolean} True if running in test mode
 */
export const isTestMode = (): boolean => {
  if (typeof window === 'undefined') {
    return process.env.NODE_ENV === 'test';
  }

  const userAgent = window.navigator.userAgent;
  const isHeadlessChrome = userAgent.includes('HeadlessChrome');
  const isPlaywright = userAgent.includes('Playwright');
  const isPuppeteer = userAgent.includes('Puppeteer');
  const isTestEnv = process.env.NODE_ENV === 'test';
  
  return isHeadlessChrome || isPlaywright || isPuppeteer || isTestEnv;
};

/**
 * Adds test mode class to document body for global test mode styling
 */
export const enableTestMode = (): void => {
  if (typeof document !== 'undefined') {
    document.body.classList.add('test-mode');
  }
};

/**
 * Removes test mode class from document body
 */
export const disableTestMode = (): void => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('test-mode');
  }
};

/**
 * Automatically enables test mode if detected
 */
export const autoEnableTestMode = (): void => {
  if (isTestMode()) {
    enableTestMode();
  }
};
