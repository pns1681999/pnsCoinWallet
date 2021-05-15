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
            <p class="card__content">{{walletBalance}} PNS</p>
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
    <div class="q-pt-md">
      <div>
        <q-card flat>
          <q-card-section class="trans__top-section">
            <div class="trans__title">
              Transaction History
            </div>
          </q-card-section>
          <q-card-section class="trans__form-container">
            <q-table
              :data="data"
              :columns="columns"
              :row-key="(Math.floor(Math.random() * 99999)).toString()"
              title-class="text-h1"
            >
              <template v-slot:body-cell-id="props">
                <q-td :props="props">
                  <div class="ellipsis" style="max-width: 300px">
                    {{props.value}}
                  </div>
                </q-td>
              </template>
              <template v-slot:body-cell-method="props">
                <q-td :props="props">
                  <div>
                    <q-badge v-if="props.row.from === '*authorized-reward*'" color="yellow" label="Reward" />
                    <q-badge v-else color="purple" label="Transfer" />
                  </div>
                </q-td>
              </template>
              <template v-slot:body-cell-type="props">
                <q-td :props="props">
                  <div v-if="walletAdress === props.row.from">
                    <q-badge color="red" label="Out" />
                  </div>
                  <div v-if="walletAdress === props.row.to">
                    <q-badge color="green" label="In" />
                  </div>
                </q-td>
              </template>
            </q-table>
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
export default class Dashboard extends Mixins(DeviceMixin) {
  data=[]
  columns = [
    {
      name: 'id',
      required: true,
      label: 'Txn Id',
      align: 'left',
      field: 'id',
    },
    {
      name: 'method',
      label: 'Method'
    },
    {
      name: 'block',
      required: true,
      label: 'Block',
      align: 'left',
      field: 'block',
    },
    {
      name: 'timestamp',
      required: true,
      label: 'Date Time (UTC)',
      align: 'left',
      field: 'timestamp',
    },
    {
      name: 'from',
      required: true,
      label: 'From',
      align: 'left',
      field: 'from',
    },
    {
      name: 'type'
    },
    {
      name: 'to',
      required: true,
      label: 'To',
      align: 'left',
      field: 'to',
    },
    {
      name: 'amount',
      required: true,
      label: 'Amount',
      align: 'left',
      field: 'amount',
      format: (val: number) => `${val} PNS`
    }
  ]
  walletBalance = 0;
  get walletAdress() {
    return this.$q.localStorage.getItem('address')
  }
  async loadWallet () {
    const res = await this.$api.wallet.getInfo(this.walletAdress)
    const res2 = await this.$api.wallet.transactionHistory(this.walletAdress)
    this.walletBalance = res.data.balance;
    this.data = res2.data
  }
  async created() {
    await this.loadWallet()
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