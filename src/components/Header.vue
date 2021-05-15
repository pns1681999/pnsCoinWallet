<template>
  <q-header :elevated="isScroll" class="bg-white text-white header">
    <div :class="!isAuth ? 'page-container' : ''">
      <q-toolbar  :class="isScroll ? 'trans toolbar__tiny justify-center' : 'trans toolbar justify-center'">
        <img src="logo.png" :class="isScroll?'trans toolbar__logo__tiny' : ' trans toolbar__logo'" @click="$router.push('/')">
        <q-space/>
        <div v-if="!isAuth" class="btn">
          <q-btn :disable="!isScroll" :class="isScroll? 'trans btn__show' : 'trans btn__hide'" to='/create-wallet' color="primary" no-caps label="New Wallet" outline/>
          <q-btn :disable="!isScroll"  :class="isScroll? 'trans btn__show' : 'trans btn__hide'" to='/access-wallet' color="primary" unelevated no-caps label="Access" class="q-ml-sm"/>
        </div>
        <div v-else>
          <q-avatar>
            <img :src="avatarSrc" alt="">
          </q-avatar>
          <q-btn icon="expand_more" flat color="grey-8" rounded>
            <q-menu auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>
                    Transaction Pool
                  </q-item-section>
                </q-item>
                <q-item clickable @click="logOut">
                  <q-item-section>
                    Log out
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import * as blockies from 'blockies-ts'
@Component({
  props: {
    isScroll: Boolean
  }
})
export default class Header extends Vue {
  get isAuth() {
    return this.$route.path.includes('/interface')
  }
  get walletAdress() {
    return '0xCd4655Fd05bcf8E086FB9eaC5bB975ff95eFc2E5';
  }
  get avatarSrc() {
    return blockies.create({seed: this.walletAdress}).toDataURL()
  }

  logOut() {
    this.$q.localStorage.clear();
    this.$router.push('/');
  }
}
</script>
<style scoped lang="scss">
.trans {
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.toolbar{
  padding: 30px 25px;
  &__tiny {
    padding: 15px 25px;
  }
  &__logo {
    height: 33px;
    &__tiny {
      height: 28px;
    }
  }
}
.btn {
  position: relative;
  font-weight: 400;
  overflow: hidden;
  &__hide {
    opacity: 0 !important;
    top: 50px;
  }
  &__show {
    opacity: 1  !important;
    top: 0px;
  }
}
</style>