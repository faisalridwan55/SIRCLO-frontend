import React from "react";
import styled from "styled-components";

export const Box = styled.div<any>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
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
