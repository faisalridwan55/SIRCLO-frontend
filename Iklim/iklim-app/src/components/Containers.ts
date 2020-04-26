import styled from "styled-components";

import { Box } from "src/components";
import { BoxProps } from "./Box";

export const SimpleContainer = styled(Box)<BoxProps>`
  flex: 1;
`;

export const Container = styled(SimpleContainer)<BoxProps>`
  padding: ${({ padding }) => padding || "16px"};
`;
