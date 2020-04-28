import React from "react";
import styled from "styled-components";
import mixin from "src/utils/mixin";

export type BoxProps = {
  top?: number;
  left?: number;
  width?: string;
  right?: number;
  height?: string;
  border?: string;
  bottom?: number;
  gutter?: string;
  margin?: string;
  padding?: string;
  position?: string;
  borderTop?: string;
  marginTop?: string;
  borderLeft?: string;
  marginLeft?: string;
  rowSpacing?: string;
  borderRight?: string;
  marginRight?: string;
  borderBottom?: string;
  marginBottom?: string;
  flexDirection?: string;
  backgroundColor?: string;
};

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};

  ${mixin("width")};
  ${mixin("height")};
  ${mixin("padding")};
  ${mixin("backgroundColor")};

  ${mixin("top")};
  ${mixin("left")};
  ${mixin("right")};
  ${mixin("bottom")};
  ${mixin("position")};

  ${mixin("border")};
  ${mixin("borderTop")};
  ${mixin("borderLeft")};
  ${mixin("borderRight")};
  ${mixin("borderBottom")};

  ${mixin("margin")};
  ${mixin("marginTop")};
  ${mixin("marginLeft")};
  ${mixin("marginRight")};
  ${mixin("marginBottom")};

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
