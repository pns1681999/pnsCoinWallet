<template>
  <q-page class="wrap">
    <div class="row q-col-gutter-md">
      <div class="col-4">
        <q-card flat class="row card card-address">
          <q-card-section>
            <img src="wSun.png" alt="" class="card__avatar">
          </q-card-section>
          <q-card-section class="col">
            <div class="card__title">Address</div>
            <p class="card__content">{{walletAdress}}</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <q-card flat class="row card card-balance">
          <q-card-section>
            <img src="balance.svg" alt="" class="card__icon">
          </q-card-section>
          <q-card-section class="col">
            <div class="card__title">Balance</div>
            <p class="card__content">{{walletBalance}} ETH</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <q-card flat class="row card card-network">
          <q-card-section>
            <img src="icon-ETH.svg" alt="" class="card__avatar">
          </q-card-section>
          <q-card-section class="col">
            <div class="card__title">Network</div>
            <p class="card__content">infura.io-ws(ETH)</p>
            <p class="card__content">Last block# : 12288701</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-pt-md q-col-gutter-md">
      <div class="col-8">
        <q-card flat>
          <q-card-section class="trans__top-section">
            <div class="trans__title">
              Send Transaction
            </div>
          </q-card-section>
          <q-card-section class="trans__form-container">
            <form-transaction @submit="handleSubmit"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import {DeviceMixin} from 'src/mixins';
import FormTransaction from 'components/FormTransaction.vue'
@Component({
  components: {FormTransaction}
})
export default class SendTransaction extends Mixins(DeviceMixin) {
  walletBalance = 0;
  get walletAdress() {
    return this.$q.localStorage.getItem('address')
  }
  async loadWallet () {
    const res = await this.$api.wallet.getInfo(this.walletAdress)
    this.walletBalance = res.data.balance;
    console.log(res)
  }
  async created() {
    await this.loadWallet()
  }
  async handleSubmit(data) {
    const body = {
      ...data,
      keyPair: this.$q.localStorage.getItem('keyPair')
    }
    try {
      const res = await this.$api.wallet.sendCrypto(data.recipient, parseInt(data.amount));
      res.status = 200 ? this.$q.notify({type: 'positive', message: 'Transaction created!'})
      : this.$q.notify({type:'negative', message:'Something went wrong. Please try again'})
    } catch (error) {
      this.$q.notify({type:'negative', message:'Something went wrong. Please try again'})
    }
  }
};
</script>
<style scoped lang="scss">
.wrap{
  background-color: #f2f4fa;
  padding: 20px
}
.card-address{
  background-color: #7070e3;
}
.card-balance{
  background-color: #5a78f0;
}
.card-network{
  background-color: #25b0e8;
}
.card{
  height: 100%;
  &__icon{
    width: 60px;
    padding-top: 10px;
  }
  &__avatar{
    width: 60px;
    height: 60px;
    margin-top: 10px;
    border-radius: 50%;
    border: #fff solid 4px;
    background-color: $primary;
  }
  &__title{
    color: #fff;
    font-size: 22px;
    font-weight: 500;
  }
  &__content{
    color: #fff;
    font-weight: 300;
    word-break: break-all;
  }
}
.trans{
  &__top-section{
    padding: 8px 0;
    border-bottom: 2px solid #f2f4fa;
  }
  &__title{
    font-size: 25px;
    font-weight: 600;
    padding-left: 30px;
    border-left: 5px solid #05c0a5;
  }
  &__form-container{
    padding: 40px;
  }
}

</style>