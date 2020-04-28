import styled from "styled-components";
import { Colors } from "src/styles/themes";

type Props1 = {
  color?: string;
  backgroundColor?: string;
};

export const TRow = styled.tr`
  &:nth-child(even) {
    background-color: ${Colors.white2};
  }
`;

export const THead = styled.th<Props1>`
  padding: 1rem 2rem;
  color: ${({ color }) => color || Colors.white};
  background-color: ${({ backgroundColor }) => backgroundColor || Colors.grey};
`;

export const TCell = styled.td`
  padding: 1rem;
`;
