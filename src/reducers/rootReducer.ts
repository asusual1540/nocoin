import { combineReducers } from "redux";

import blockReducer from "./blockchain/blockReducer";
import walletReducer from "./wallet/walletReducer";
import transactionReducer from "./transaction/transactionReducer";
import puzzleReducer from "./puzzle/puzzleReducer";

const rootReducer = combineReducers({
  blockchain: blockReducer,
  wallet: walletReducer,
  transaction: transactionReducer,
  puzzle: puzzleReducer,
});

export type NocoinState = ReturnType<typeof rootReducer>;

export default rootReducer;