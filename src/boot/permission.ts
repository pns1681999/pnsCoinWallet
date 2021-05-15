/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable */
import { boot } from 'quasar/wrappers';
import { LocalStorage } from 'quasar'

const whiteList = ['error']; // no redirect whitelist
const authList = ['dashboard', 'interface', 'send-transaction'];
export default boot(({ router, store }) => {
  router.beforeEach(async (to, from, next) => {
    try {
      if (whiteList.includes(to.name as string)) {
        return next();
      }
      const keyPair = LocalStorage.getItem('keyPair');
      if (keyPair) {
        if ( authList.includes(to.name as string)) {
          return next();
        } else {
          next('/interface');
        }
      } else {
        if (authList.includes(to.name as string)) {
          return next('/');
        } else {
          next();
        }
      }
    } catch (error) {
      console.error(error);
      if (whiteList.includes(to.name as string)) {
        next();
      } else {
        next('/');
      }
    }
  });
});
