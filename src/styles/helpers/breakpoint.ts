import { StyledProps } from 'styled-components';
import { Breakpoint, MediaBreakpoint as MB } from 'styles/breakpoints';

type MediaQueryType = typeof MB;
type Method = keyof MediaQueryType;
type MethodWithoutBetween = Exclude<Method, 'between'>;

type UpDownFunctionType = (
  size: Breakpoint,
  vertical?: boolean,
) => <P>(props: StyledProps<P>) => string;

type BetweenFunctionType = (
  size: Breakpoint,
  maxSize: Breakpoint,
  vertical?: boolean,
) => <P>(props: StyledProps<P>) => string;

const breakpointFn = (method: Method) => {
  function func(
    size: Breakpoint,
    vertical?: boolean,
  ): <P>(props: StyledProps<P>) => string;
  function func(
    size: Breakpoint,
    maxSize: Breakpoint,
    vertical?: boolean,
  ): <P>(props: StyledProps<P>) => string;
  function func(
    size: Breakpoint,
    maxSizeOrVertical?: Breakpoint | boolean,
    vertical?: boolean,
  ) {
    if (typeof maxSizeOrVertical === 'string') {
      return <P>(props: StyledProps<P>): string =>
        props.theme.MediaBreakpoint[method as 'between'](
          size,
          maxSizeOrVertical,
          vertical,
        );
    }
    return <P>(props: StyledProps<P>): string => {
      method = method as MethodWithoutBetween;
      return props.theme.MediaBreakpoint[method](size, maxSizeOrVertical);
    };
  }
  return func;
};

export const MediaBreakpoint = Object.keys(MB).reduce((acc, method) => {
  acc[method as Method] = breakpointFn(method as Method);
  return acc;
}, {} as { [P in MethodWithoutBetween]: UpDownFunctionType } & { between: BetweenFunctionType });
