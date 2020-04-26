import React from "react";
import styled from "styled-components";

export type BoxProps = {
  gutter?: string;
  padding?: string;
  rowSpacing?: string;
  flexDirection?: string;
};

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  ${({ padding }) => padding && `padding: ${padding};`};

  ${({ gutter }) =>
    gutter &&
    `
    > * + * {
      margin-left: ${gutter};
    }
  `};
  ${({ rowSpacing }) =>
    rowSpacing &&
    `
    > * + * {
      margin-top: ${rowSpacing};
    }
  `};
`;

export const Row = (props) => <Box flexDirection="row" {...props} />;
