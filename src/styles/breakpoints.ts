const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export type Breakpoint = keyof typeof breakpoints;

export default breakpoints;

const friction = 0.02;

export const MediaBreakpoint = {
  up: (breakpoint: Breakpoint, vertical = false) => {
    const value = breakpoints[breakpoint];
    if (value === undefined) {
      throw new Error(`invalid breakpint: ${breakpoint}`);
    }
    return `@media (min-${vertical ? 'height' : 'width'}: ${value}px)`;
  },
  down: (breakpoint: Breakpoint, vertical = false) => {
    const keys = Object.keys(breakpoints);
    const index = keys.indexOf(breakpoint);
    if (index === -1) {
      throw new Error(`invalid breakpint: ${breakpoint}`);
    }
    const value = breakpoints[keys[index + 1] as Breakpoint];
    if (value === undefined) {
      throw new Error(`invalid breakpint: ${breakpoint}`);
    }
    return `@media (max-${vertical ? 'height' : 'width'}: ${
      value - friction
    }px)`;
  },
  between: (
    breakpointMin: Breakpoint,
    breakpointMax: Breakpoint,
    vertical = false,
  ) => {
    const minValue = breakpoints[breakpointMin];
    const maxValue = breakpoints[breakpointMax];
    if (minValue === undefined || maxValue === undefined) {
      throw new Error(
        `invalid breakpint: ${breakpointMin} and ${breakpointMax}`,
      );
    }
    return `@media (max-${vertical ? 'height' : 'width'}: ${
      maxValue - friction
    }px) and (min-${vertical ? 'height' : 'width'}: ${minValue}px)`;
  },
};
