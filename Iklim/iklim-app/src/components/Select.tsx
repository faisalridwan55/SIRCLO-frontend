import React from "react";
import ReactSelect, { Props } from "react-select";

export default function Select<T>(props: Props<T>) {
  return <ReactSelect {...props} />;
}
