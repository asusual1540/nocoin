import { combineReducers } from "redux";

import blockReducer from "./blockchain/blockReducer";

const rootReducer = combineReducers({
  blockchain: blockReducer,
});

export type NocoinState = ReturnType<typeof rootReducer>;

export default rootReducer;