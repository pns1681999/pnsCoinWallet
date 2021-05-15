export type LoginRequest = {
  publicKey: string;
  privateKey: string;
  password: string;
};

export type Wallet = {
  address: string;
  balance: number;
}

export interface API {
  wallet: {
    getInfo(publicKey: string): Promise<Wallet>;
    sendCrypto(recipient: string, amount: number): any;
    transactionHistory(publicKey: string): any;
  };
}