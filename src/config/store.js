//import authReducer from 'store/reducers/authReducer'
//import { createStore, combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "store/reducers/rootReducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "config/fbConfig";

/* 
const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
  }); */

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

/* const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); */

export default store;
