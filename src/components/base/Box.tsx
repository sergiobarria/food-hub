import * as React from 'react';
import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  shadow,
  compose,
} from 'styled-system';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';
// import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

type BaseProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  ShadowProps;

const BoxSystemProps = compose(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  shadow
);

const StyledBox = styled.View(BoxSystemProps);

interface BoxProps extends BaseProps {
  children: React.ReactNode;
}

export const Box = (props: BoxProps) => {
  const { children, ...rest } = props;
  // const theme = useTheme();

  return <StyledBox {...rest}>{children}</StyledBox>;
};
