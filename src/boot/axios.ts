import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import {API} from 'src/api/types';
import exposeApis from 'src/api';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
    $api: API;
  }
}
const baseURL = 'http://localhost:3000/api';
export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const axiosInstance = axios.create({ baseURL });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axiosInstance;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$api = exposeApis(axiosInstance);
});
