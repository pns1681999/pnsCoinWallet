<template>
  <q-footer class="footer">
    <div class="page-container">
      <div class="row">
        <div class="col-12 col-md-8 row">
          <div class="col-4 content">
            <div class="content__title">Discover</div>
            <div v-for="item in listDiscover" :key="item" class="content__item">
              {{item}}
            </div>
          </div>
          <div class="col-4 content">
            <div class="content__title">Affiliates</div>
            <div v-for="item in listAffiliates" :key="item" class="content__item">
              {{item}}
            </div>
          </div>
          <div class="col-4 content">
            <div class="content__title">MEW</div>
            <div v-for="item in listMEW" :key="item" class="content__item">
              {{item}}
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 content">
          <div class="content__title">
            Love <q-icon color="red" size="sm" name="favorite"/> MEW? Donate
          </div>
          <div class="content__item">
            MyEtherWallet is open-source and free to the community. Your donations go a long way towards making that possible.
          </div>
        </div>
      </div>
      <div class="note row">
        <div class="col"></div>
        <div class="col-12 col-md text-center items-center">
          <div class=" text-center">
            Pricing taken from <span class="text-white">Coingecko</span>
          </div>
          © 2021 MyEtherWallet. All Rights reserved.
        </div>
        <div class="col"></div>        
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  listDiscover = [ 'Convert Units', 'MEW wallet', 'MEWconnect Protocol', 'MEW CX', 'EthVM','Buy a Hardware wallet', 'Send Offline Helper', 'Verify Message', 'Submit Dapp', 'Press Kit', 'Generate Eth2 Address'];
  listAffiliates =['Ledger Wallet', 'Erther Card', 'Alchemy', 'Bity', 'Billfodl', 'Finney', 'Trezor', 'Sekalot', 'KeepKey', 'CoolWallet', 'State of Dapps', 'BC Vault'];
  listMEW = ['About', 'FAQs', 'Team', 'MEWtopia', 'Customer support', 'Help Center']
}
</script>
<style scoped lang="scss">
.footer{
  background-color: #0b2840;
  color: #fff;
  padding: 70px 0 0;
}
.content{
  &__title{
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  &__item {
    font-size: 14px;
    color: #96a8b6;
    margin-bottom: 15px;
  } 
}
.note{
  border-top: 1px solid #506175;
  padding: 40px 5px;
  color: #96a8b6;
}
</style>