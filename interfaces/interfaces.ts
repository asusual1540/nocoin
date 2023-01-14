
export interface Block {
    timestamp: string,
    last_hash: string,
    hash: string,
    data: string,
    puzzle: string,
    difficulty: string,
    answer: string,
}

export interface BlockChain {
    chain: Block[]
}


export interface Wallet {
    blockchain: BlockChain,
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

export interface Puzzle {
    id: string,
    output: {
        recipient: string,
        creator_wallet_address: number
    },
    input: {
        timestamp: string,
        description: string,
        address: string,
        public_key : string,
        hash: string,
    }
}

export interface PuzzlePool {
    puzzle_map: {
        [puzzle_id: string]: Puzzle
    },
}



  