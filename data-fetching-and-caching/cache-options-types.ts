interface AllCacheOptions {
  mode?: string;                   // Defines caching mode (e.g., "public", "private")
  maxAge?: number;                 // Maximum age of the cache in seconds
  staleWhileRevalidate?: number;   // Duration in which stale data can be served while revalidation is attempted
  sMaxAge?: number;                // Similar to maxAge, but for shared (e.g., CDN) caches
  staleIfError?: number;           // Duration in which stale data can be served if revalidation fails
}
