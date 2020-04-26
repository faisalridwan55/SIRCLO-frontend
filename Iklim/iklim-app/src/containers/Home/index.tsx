import React from "react";
import { Container, Row, Box } from "src/components";
import { Sizes } from "src/styles/themes";

export default function Home() {
  return (
    <Container>
      <Box rowSpacing={Sizes.spacing.smaller}>
        <Row>Silahkan memilih kota:</Row>
      </Box>
    </Container>
  );
}
