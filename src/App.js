import React from "react";
import Index from "pages/index";
import Page404 from "pages/page404";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <HashRouter baseurl={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route component={Page404}/>
        </Switch>
    </HashRouter>
);
