'use client';

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;

  // Check for mobile user agent
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUA = /android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  
  // Check for touch capability
  const hasTouch = navigator.maxTouchPoints > 0;
  
  // Check screen width (to distinguish between mobile and tablet)
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const isSmallScreen = screenWidth < 768;
  
  // Check screen ratio (phones are typically portrait oriented)
  const isPortrait = screenHeight > screenWidth;
  
  // Combined check: mobile UA OR (touch + small screen + portrait)
  return isMobileUA || (hasTouch && isSmallScreen && isPortrait);
}