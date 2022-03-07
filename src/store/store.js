import { createStore } from "redux";
import { myLogin } from "../reducer/reducer";

export const myStore=createStore(myLogin)