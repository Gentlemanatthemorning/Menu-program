import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Contact from "./components/contact";
import App from "./components/App";
import Profile from "./components/profile";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Strona glowna</Link>
          </li>
          <li>
            <Link to="/contact">Espresso</Link>
          </li>
          <li>
            <Link to="/profile">strona profilowa</Link>
          </li>
          <li>
            <Link to="/profile/damian">strona profilowa damian</Link>
          </li>
          <li>
            <Link to="/dasojiijdas">Nieistniejaca strona</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return <h1> Not Found </h1>;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/:name" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById("root")
  );
});
