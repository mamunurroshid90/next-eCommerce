import { configureStore } from "@reduxjs/toolkit";
import eCommerceReducer from "./eCommerceSlice";
import { persistStore, persistReducer, WebStorage } from "redux-persist";

import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { version } from "os";

export function createPersistStore(): WebStorage {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, eCommerceReducer);

export const store = configureStore({
  reducer: {
    eCommerce: persistedReducer,
  },
});

export let persistor = persistStore(store);
