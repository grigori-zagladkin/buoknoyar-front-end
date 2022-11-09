import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";
import { setupStore } from "./store";

let store = setupStore();

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <HelmetProvider context={helmetContext}>
        <ChakraProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </BrowserRouter>
            </Provider>
        </ChakraProvider>
    </HelmetProvider>
);
