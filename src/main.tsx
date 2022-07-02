import React from "react"
import ReactDOM from "react-dom/client"
import { PersistGate } from "redux-persist/integration/react"
import App from "./App"
import "./main.css"
import { Provider } from "react-redux"
import { persistor, store } from "./store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
