import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import requests from "./requests";
import auth from "./auth";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    requests,
  });
