declare module '@splidejs/react-splide' {
  import * as React from 'react';
  export const Splide: React.ComponentType<Record<string, unknown>>;
  export const SplideSlide: React.ComponentType<Record<string, unknown>>;
  export default Splide;
}

declare module '@splidejs/splide' {
  const Splide: Record<string, unknown>;
  export default Splide;
}
