/**
 * Minimal, privacy-preserving event tracking.
 *
 * Only non-personal context (e.g. which button/section was used) should ever be
 * passed here. As a safety net, any value that looks like an email address or a
 * long digit sequence (phone number) is replaced with "[REDACTED]" before it is
 * handed to an analytics provider, so visitor-entered details can never leak
 * into third-party tracking events.
 */
const EMAIL_LIKE = /[^\s@]+@[^\s@]+\.[^\s@]+/;
const PHONE_LIKE = /\d[\d\s().-]{7,}/;

function redactValue(value: unknown): unknown {
  if (typeof value !== "string") return value;
  if (EMAIL_LIKE.test(value) || PHONE_LIKE.test(value)) return "[REDACTED]";
  return value;
}

function redactProperties(properties: Record<string, unknown>) {
  const safe: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(properties)) {
    safe[key] = redactValue(value);
  }
  return safe;
}

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  const safeProperties = properties ? redactProperties(properties) : undefined;

  // Check if GTM/GA is loaded
  const gtag = (globalThis as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof window !== "undefined" && typeof gtag === "function") {
    gtag("event", eventName, safeProperties);
  }

  // Dev-only: log the event name but never the payload, so visitor-entered
  // details never land in the browser console.
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`);
  }
};
