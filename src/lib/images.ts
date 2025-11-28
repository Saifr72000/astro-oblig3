/**
 * Image helper utilities
 * Maps external API image URLs to local optimized WebP versions
 */

import imageMapping from "./image-mapping.json";

type ImageMapping = {
  [filmId: string]: {
    poster?: string;
    banner?: string;
  };
};

const mapping = imageMapping as ImageMapping;

/**
 * Get optimized local image path for a film poster
 */
export function getFilmPoster(filmId: string): string {
  return mapping[filmId]?.poster || "/images/placeholder.webp";
}

/**
 * Get optimized local image path for a film banner
 */
export function getFilmBanner(filmId: string): string {
  return mapping[filmId]?.banner || "/images/placeholder.webp";
}
