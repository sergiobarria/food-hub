import * as React from 'react';

import { color, compose, space, typography } from 'styled-system';
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';
import styled from '@emotion/native';

type BaseProps = ColorProps & SpaceProps & TypographyProps;

const HeadingSystemProps = compose(color, space, typography);

const StyledHeading = styled.Text(HeadingSystemProps);

interface Props extends BaseProps {
  children: React.ReactNode;
}

export const Heading = (props: Props) => {
  const { children, ...rest } = props;

  return <StyledHeading {...rest}>{children}</StyledHeading>;
};
