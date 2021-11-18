import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { HashRouter as Router } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <Router
        basename={
          window.__POWERED_BY_QIANKUN__
            ? process.env.REACT_APP_MICRO_ROUTER
            : "/"
        }
      >
        <App />
      </Router>
    </React.StrictMode>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
reportWebVitals();
