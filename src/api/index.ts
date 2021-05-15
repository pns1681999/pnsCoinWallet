import { AxiosInstance } from 'axios';
import {LocalStorage} from 'quasar' 
export default (axios: AxiosInstance) => ({
  wallet: {
    getInfo(publicKey: any) {
      return axios.get('wallet-info', {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        params: {
          publicKey
        }
      });
    },
    sendCrypto(recipient: string, amount: number) {
      const body = {
        keyPair: LocalStorage.getItem('keyPair'),
        recipient,
        amount
      }
      return axios.post('transact', {
          ...body
      })
    },
    transactionHistory(publicKey: string) {
      return axios.get('transaction-history', {
        params: {
          publicKey
        }
      })
    }
  }
});
