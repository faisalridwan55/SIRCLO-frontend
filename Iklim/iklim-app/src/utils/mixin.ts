import { css } from "styled-components";
import kebabCase from "lodash/kebabCase";

const mixin = (prop: string) => css`
  ${(props) => props[prop] && `${kebabCase(prop)}: ${props[prop]}`};
`;

export default mixin;
