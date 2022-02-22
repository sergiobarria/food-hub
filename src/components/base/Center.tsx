import * as React from 'react';

import { Box } from './Box';

interface Props {
  children: React.ReactNode;
}

export function Center({ children }: Props) {
  return (
    <Box flex={1} alignItems='center' justifyContent='center'>
      {children}
    </Box>
  );
}
