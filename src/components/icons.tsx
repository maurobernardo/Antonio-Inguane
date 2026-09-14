type IconProps = {
  className?: string;
};

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.5.15-.18.2-.3.3-.5.1-.19.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.2 0-.5.07-.77.36-.26.3-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.15.2 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.95-1.37.24-.68.24-1.25.17-1.37-.07-.13-.26-.2-.55-.35z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.87.51 3.63 1.4 5.13L2 22l4.98-1.3A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-2.95.77.79-2.87-.2-.3A8.16 8.16 0 1 1 20.18 12a8.17 8.17 0 0 1-8.16 8.2z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.35" cy="6.65" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21.9v-8.1h2.72l.41-3.16h-3.13V8.66c0-.91.25-1.53 1.56-1.53h1.66V4.31c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.32H7.53v3.16h2.73v8.1h3.24z" />
    </svg>
  );
}
