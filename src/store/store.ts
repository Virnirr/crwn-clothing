import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// root reducer
import { rootReducer } from "./root-reducer";

// get type of root reducer
export type RootState = ReturnType<typeof rootReducer>;


// const loggerMiddleware = (store) => (next) => (action) => {
//   if(!action.type) {
//     return next(action);
//   }


//   console.log('type', action.type);
//   console.log('payload', action.payload);
//   console.log('currentState', store.getState());

//   next(action); // this is the action that hits the reducer

//   // after the action hits the reducer
//   console.log('nextState', store.getState());
// }

// little library that runs before action hits the reducer
const middleWares = [logger];

// compose is a function that takes multiple arguments and returns a single function
// middleware enhances the store
const composedEnhancers = compose(applyMiddleware(...middleWares));

// persist store
// takes two arguments: store, config
// config takes two arguments: key, storage
// key is the key in local storage
// storage is the storage object
// storage has a method called setItem and getItem
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'] // what we don't want to persis
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// takes three agruments: Root reducer, preloaded state, enhancer
export const store = createStore(persistedReducer, undefined, composedEnhancers, )

export const persistor = persistStore(store);