import React, { useState, useEffect } from "react";

import { Sizes } from "src/styles/themes";
import { TextBold, Text, Container, Row, Select, Box } from "src/components";

import { CITIES } from "./samples";
import { OptionType } from "./types";
import { optionTypeDefault } from "./defaults";

const options = CITIES.map(({ id, name }) => ({ value: id, label: name }));

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<OptionType>(options[0]);

  const Section = (props) => (
    <Box rowSpacing={Sizes.spacing.smaller} {...props} />
  );

  useEffect(() => {
    alert(`${selectedCity.value} - ${selectedCity.label}`);
  }, [selectedCity.value]);

  return (
    <Container padding="1rem 2rem" rowSpacing={Sizes.spacing.base}>
      <Section>
        <Row>Silahkan memilih kota:</Row>
        <Select<OptionType>
          options={options}
          value={selectedCity}
          onChange={(selected) =>
            setSelectedCity((selected as OptionType) || optionTypeDefault)
          }
        />
      </Section>
      <Section>
        <Text>Anda memilih kota:</Text>
        <TextBold>{selectedCity.label}</TextBold>
      </Section>
    </Container>
  );
}
