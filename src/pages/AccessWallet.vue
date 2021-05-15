<template>
  <q-page class="wrap">
    <div  class="page-container">
      <div class="page-title">
        <div class="page-title__content">
          Access My Wallet
        </div>
        <div class="page-title__caption">
          Do not have a wallet? <span> <router-link to='/create-wallet' class="link"> Create A New Wallet </router-link> </span>
        </div>
      </div>
    </div>
    <q-card class="card" flat>
      <q-card-section class="card__title">
        By Keystore File
      </q-card-section>
      <q-linear-progress v-if="password.length" size="md" :value="0.6"/>
      <q-card-section class="card__password">
        <upload-keystore v-if="password.length" @load="keystore = $event" @access="onAccess"/>
        <form-password v-else v-model="password"/>
        <fail-modal :show="show" @hide="onHide"/>
      </q-card-section>
      <q-card-section class="card__note">
      </q-card-section>
    </q-card>
    <div class="page-note">
      Want to learn more about Blockchain or MEW? Please go to <router-link class="link" to="/#FAQ"> FAQs </router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import FormPassword from 'components/FormPassword.vue'
import DownloadKeystore from 'components/DownloadKeystore.vue'
import UploadKeystore from 'components/UploadKeystore.vue'
import FailModal from 'components/FailModal.vue'
import { Component, Mixins } from 'vue-property-decorator';
import {DeviceMixin} from 'src/mixins'
import {ec} from 'src/utils/index'


@Component({
  components: {FormPassword, DownloadKeystore, FailModal, UploadKeystore},
})
export default class AccessWallet extends Mixins(DeviceMixin) {
  password = '';
  file = null;
  keystore = null;
  show = false;
  onAccess() {
    if (this.keystore) {
      const keyJSON = JSON.parse(this.keystore);
      if(keyJSON.password === this.password) {
        const keyPair = ec.keyPair(keyJSON.keyPair);
        this.$q.localStorage.set('address', keyPair.getPublic().encode('hex'));
        this.$q.localStorage.set('keyPair', keyJSON.keyPair);
        this.$router.push('/interface');
      } else {
        this.show = true;
      }
    }
  }
  onHide() {
    this.show = false;
    this.file = null;
    this.password = '';
  }
};
</script>
<style scoped lang="scss">
.wrap{
  background-color: #f9f9f9;
}
.page-title{
  padding: 80px 0 40px;
  &__content{
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 15px;
    font-weight: 500;
    text-align: center;
  }
  &__caption{
    color: #506175;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
}
.card{
  max-width: 550px;
  margin: 0 auto;
  &__title{
    background: #434f61;
    color: #fff;
    text-align: center;
  }
  &__password{
    padding: 50px;
  }
  &__note {
    padding-top: 0;
    padding-bottom: 30px;
  }
}
.page-note{
  padding: 40px 0 100px;
  text-align: center;
}
</style>