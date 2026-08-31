import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/site';

interface BrandLogoProps {
  variant?: 'primary' | 'strongsconnect';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

function resolveLogoUrl(url: string): string {
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }
  return url;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'primary',
  className = '',
  showTagline = true,
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  const dimensions = {
    sm: { img: 'w-8 h-8', text: 'text-base', tag: 'text-[8px]' },
    md: { img: 'w-10 h-10', text: 'text-lg', tag: 'text-[9px]' },
    lg: { img: 'w-14 h-14', text: 'text-2xl', tag: 'text-xs' },
  }[size];

  if (variant === 'strongsconnect') {
    return (
      <div className={`inline-flex items-center gap-3 max-w-full min-w-0 ${className}`}>
        <img
          src={SITE_CONFIG.logos.strongsConnect}
          alt="StrongsConnect Logo"
          className={`${dimensions.img} rounded-xl object-contain shrink-0`}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col min-w-0 justify-center">
          <span className={`font-display font-extrabold text-slate-900 tracking-tight ${dimensions.text} leading-tight truncate`}>
            StrongsConnect
          </span>
          {showTagline && (
            <span className={`${dimensions.tag} font-semibold text-sky-600 tracking-wider uppercase mt-0.5 truncate`}>
              HealthTech Platform
            </span>
          )}
        </div>
      </div>
    );
  }

  const primaryLogoUrl = resolveLogoUrl(SITE_CONFIG.logos.primary);

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <img
        src={primaryLogoUrl}
        alt="THE STRONGS Official Logo"
        className={`${dimensions.img} rounded-xl object-contain shadow-xs shrink-0`}
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.includes('/assets/branding/the-strongs-logo.png')) {
            target.src = '/assets/branding/the-strongs-logo.png';
          } else {
            setImageError(true);
          }
        }}
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col">
        <span className={`font-display font-extrabold text-slate-900 tracking-wider ${dimensions.text} leading-tight`}>
          THE STRONGS
        </span>
        {showTagline && (
          <span className={`${dimensions.tag} font-semibold text-emerald-700 tracking-widest uppercase truncate`}>
            Innovating for a Better Tomorrow
          </span>
        )}
      </div>
    </div>
  );
};
