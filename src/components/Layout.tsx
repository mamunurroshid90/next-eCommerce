"use client";
import { persistor, store } from "@/redux/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLoader from "./MainLoader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<MainLoader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
