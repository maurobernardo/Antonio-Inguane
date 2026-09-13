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

export function XIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.6 10.62 20.94 2h-1.74l-6.37 7.48L7.74 2H2l7.7 11.24L2 22h1.74l6.73-7.9 5.37 7.9H21.8l-8.2-11.38Zm-2.38 2.79-.78-1.12L4.36 3.3h2.67l5 7.16.78 1.12 6.5 9.3h-2.67l-5.32-7.62Z" />
    </svg>
  );
}
