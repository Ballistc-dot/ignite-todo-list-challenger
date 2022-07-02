import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"
import reducer from "./features/todo"
import thunk from "redux-thunk"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})
const persistor = persistStore(store)

export { store, persistor }
