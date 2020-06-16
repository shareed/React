import React from "react";
import "./styles.css";
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom";

import ItemsList from "./ItemsList";
import Item from "./Item";

export default function Store({products}) {
 
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Emily's Trinkets</h1>
        <div className="nav-links">
          {/* Link is an <a> with default behavior re-written so that navigation is handled purely client-side. No server requests for new HTML/JS/CSS!*/}
          <Link to="/">Home</Link>
          <Link to="/item-list">Shop</Link>
        </div>
      </nav>
      {/* Switch is like a JS switch statement. The first "true" match with path and URL will render that route component and will breakout of Routes. Only first match will render. */}
      <Switch>
        {/* Route paths are expected shapes of the URL, similar to a regular expression (regex). 
        Routes with ":" indicate that there will be some string value that will be stored 
        as a PARAM with the key indicated after the :. In this case the param object would be:
        { itemId: <value in browser URL path> }*/}
        <Route path="/item-list/:itemID">
          {/* Wrapped Components will not receive Route props (like Home), because it does not use a render method described here: https://reacttraining.com/react-router/web/api/Route/route-render-methods
          However, we can now pass state through props when rendering JSX. To access Route values, we can use HOOKS such as useParams, and useRouteMatch to access values passed in render methods.
          */}
          <Item items={products} />
        </Route>
        <Route
          path="/item-list"
          render={props => {
            return <ItemsList items={products} {...props} />;
          }}
        />
        {/* component={Home} passes Home as a variable to render when path matches. This is using a render method that passes Route props into Home, such as 'history', 'location', and 'match', 
      however it does not allow us to declare props on Home, since HOme is a variable and not JSX */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
