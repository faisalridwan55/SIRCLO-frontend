import React from "react";
import styled from "styled-components";
import FadeLoader from "react-spinners/FadeLoader";

import { Colors } from "src/styles/themes";

import { BoxProps } from "./Box";

type Props = BoxProps & { show: boolean };
const Overlay = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;

  background: ${Colors.white2};
  opacity: ${(props) => (props.show ? 0.7 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export default function Loading({ show }: Props) {
  return (
    <Overlay show={show}>
      <FadeLoader loading={show} color={Colors.black2} />
    </Overlay>
  );
}
