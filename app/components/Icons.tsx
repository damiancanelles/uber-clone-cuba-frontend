// Simple SVG icons matching the design's Material Symbols Sharp style
import type { CSSProperties } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

export const DashboardIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

export const CarIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

export const RocketIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.64 1.8-.51l1.34.22zm10.46 10.46-.22-1.34c-.13-.65.04-1.33.51-1.8L24 9.62l-1.55 3.62c-.31.13-3.6 1.53-5.89 3.57zm-5.04.75L12 21l-2.56-3.62c.3-.2 3.03-2.03 5.17-5.17l.97 1.38c.13.18.17.4.08.59-.38.75-.86 1.6-1.05 2.38zm-5.43-5.43c3.15-3.15 5.87-4.91 7.36-5.74l1.84 1.84c-.83 1.49-2.59 4.21-5.74 7.36L11 14.15l-1.82-2.02zm7.5-7.93c.6-.17 1.24-.02 1.68.43l.58.58c.44.44.6 1.08.43 1.68l-.38 1.34-4.13-4.13 1.82-.9zM6.83 17.17l-2.83 2.83H7l1.9-1.9-2.07-.93z"/>
  </svg>
);

export const AnalyticsIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

export const SettingsIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

export const LogoIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 2L4 9v14l12 7 12-7V9L16 2zm0 3.46L25.54 11 16 16.54 6.46 11 16 5.46zM6 12.81l9 5.23V27.5l-9-5.23V12.81zm10 5.23l9-5.23v9.46l-9 5.23V18.04z"/>
  </svg>
);

export const ChevronDownIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
);
