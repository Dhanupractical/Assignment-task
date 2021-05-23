import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from '../App';
import { Provider } from 'react-redux';
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['PostReducer'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const storePersistor = persistStore(store);
export const Store = function () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
