import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";

import "./configs/i18n";
import "moment/locale/vi";

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
serviceWorker.unregister();
