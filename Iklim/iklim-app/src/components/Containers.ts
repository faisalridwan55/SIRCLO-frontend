import styled from "styled-components";

import { Box } from "src/components";

export const SimpleContainer = styled(Box)`
  flex: 1;
`;

type ContainerProps = {
  padding?: string;
};
export const Container = styled(SimpleContainer)<ContainerProps>`
  padding: ${({ padding }) => padding || "16px"};
`;
