import React, { useState } from 'react';
import { SITE_IMAGES } from '../../data/siteImages';

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-contain',
  containerClassName = 'relative w-full h-full overflow-hidden bg-neutral-950/60 flex items-center justify-center',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const displaySrc = !src || hasError ? SITE_IMAGES.fallback.productPlaceholder : src;

  return (
    <div className={containerClassName}>
      <img
        src={displaySrc}
        alt={alt || 'EASTETIC clinical formulation'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-80'
        }`}
      />
    </div>
  );
};
