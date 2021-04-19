<template>
  <q-page class="wrap">
    <div  class="page-container">
      <div class="page-title">
        <div class="page-title__content">
          Get a New Wallet
        </div>
        <div class="page-title__caption">
          Already have a wallet? <span> <router-link to='/access-wallet' class="link"> Access My Wallet </router-link> </span>
        </div>
      </div>
    </div>
    <q-card class="card" flat>
      <q-card-section class="card__title">
        By Keystore File
      </q-card-section>
      <q-card-section class="card__password">
        <form-password v-model="password"/>
      </q-card-section>
      <q-card-section class="card__note">
        <div class="text-center"> <span class="text-red text-weight-medium">DO NOT FORGET</span> to save your password. You will need this</div>
        <div class="text-center"> <span class="text-red text-weight-medium">Password + Keystore</span> File to unlock your wallet.</div>
      </q-card-section>
    </q-card>
    <div class="page-note">
      Want to learn more about Blockchain or MEW? Please go to <router-link class="link" to="/#FAQ"> FAQs </router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import FormPassword from 'components/FormPassword.vue'
import { Component, Mixins } from 'vue-property-decorator';
import {DeviceMixin} from 'src/mixins'
@Component({
  components: {FormPassword}
})
export default class PageIndex extends Mixins(DeviceMixin) {
  password = '';
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