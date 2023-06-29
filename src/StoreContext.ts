import React from "react";
import store, {storeType} from "./redux/store";
import {StoreAppType} from "./redux/redux-store";

let StoreContext = React.createContext<StoreAppType | null>(null)

export default StoreContext;