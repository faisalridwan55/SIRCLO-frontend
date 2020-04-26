import React from "react";
import styled from "styled-components";
import { createBrowserHistory } from "history";
import { Switch, Router, Route, Redirect } from "react-router-dom";

import { Row } from "src/components";
import Home from "src/containers/Home";
import { Colors } from "src/styles/themes";
import { TextBold } from "src/components/Text";

const customHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={customHistory}>
      <Navbar>
        <TextBold color={Colors.white}>5 DAYS WEATHER FORECAST</TextBold>
      </Navbar>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

const Navbar = styled(Row)<any>`
  min-height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.black2};
`;
