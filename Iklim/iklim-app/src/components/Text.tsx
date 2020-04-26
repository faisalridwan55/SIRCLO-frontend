import React from "react";
import styled from "styled-components";
import mixin from "src/utils/mixin";

type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
};

export const Text = styled.span<TextProps>`
  ${mixin("color")};
  ${mixin("fontSize")};
  ${mixin("fontWeight")};
  ${mixin("lineHeight")};
  ${({ bold }) => bold && "font-weight: bold"}
`;

export const TextBold = (props) => <Text {...props} bold />;
