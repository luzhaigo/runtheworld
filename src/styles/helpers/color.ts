import { StyledProps } from 'styled-components';
import { rgba as polishedRGBA } from 'polished';
import colors, { ColorsType } from 'styles/colors';

type ColorName = keyof ColorsType;

const colorFn = (color: ColorName) => <P>(props: StyledProps<P>): string =>
  props.theme.colors[color];

export const rgba = (color: ColorName, alpha: number) => <P>(
  props: StyledProps<P>,
): string => {
  const themeColor = colorFn(color)(props);
  return polishedRGBA(themeColor, alpha);
};

export const Color = Object.keys(colors).reduce((acc, name) => {
  acc[name as ColorName] = colorFn(name as ColorName);
  return acc;
}, {} as { [P in keyof ColorsType]: <T>(props: StyledProps<T>) => ColorsType[P] });
