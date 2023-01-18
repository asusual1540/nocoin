
import {
    GET_BLOCKCHAIN_REQUEST,
    GET_BLOCKCHAIN_SUCCESS,
    GET_BLOCKCHAIN_FAILURE,
  } from "./actionTypes";
  


export interface Puzzle {
  id: string,
  description: string,
  puzzle_hash: string,
}

  

export interface Block {
  timestamp: number,
  last_hash: string,
  hash: string,
  data: [],
  puzzle: Puzzle,
  difficulty: number,
  answer: string,
}


export interface Wallet {
  address: string,
  private_key: string,
  public_key: string
}

export interface Transaction {
  id: string,
  output: {
      recipient: string,
      sender_wallet_address: number
  },
  input: {
      timestamp: string,
      amount: string, 
      address: string, 
      public_key : string, 
      signature: string,
  }
}



export interface TransactionPool {
  transaction_map: {
      [transaction_id: string]: Transaction
  },
}


export interface PuzzlePool {
  puzzle_map: {
      [puzzle_id: string]: Puzzle
  },
}





export interface BlockchainState {
  loading: boolean;
  chain: Block[];
  error: string | null;
}
  
export interface GetBlockchainRequest {
  type: typeof GET_BLOCKCHAIN_REQUEST;
}

export interface GetBlockchainSuccessPayload {
  chain: Block[];
}

export interface GetBlockchainFailurePayload {
  error: string;
}


export type GetBlockchainSuccess = {
  type: typeof GET_BLOCKCHAIN_SUCCESS,
  payload: GetBlockchainSuccessPayload,
};

export type GetBlockchainFailure = {
  type: typeof GET_BLOCKCHAIN_FAILURE,
  payload: GetBlockchainFailurePayload,
};



export type BlockchainActions =
  | GetBlockchainRequest
  | GetBlockchainSuccess
  | GetBlockchainFailure;