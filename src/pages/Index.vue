<template>
  <q-page>
    <div  class="page-container">
      <div class="row banner" full-width>
        <div class="col-5 column justify-center">
          <div class="banner__h1">Ethereum's</div>
          <div class="banner__h1">Original Wallet</div>
          <p class="banner__p">MyEtherWallet (our friends call us MEW) is a free, client-side interface helping you interact with the Ethereum blockchain. Our easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.</p>
        </div>
        <img src="homepage-1.png" class="col-7">
      </div>
      <div class="grid-2-col">
        <div class="card card__create">
          <div class="card__left">
            <img class="card__img" src="create.png">
          </div>
          <div class="card__content">
            <div>
              <div class="card__title">
                Create A New Wallet
              </div>
              <p class="card__p">Generate your own unique Ethereum wallet. Receive a public address (0x...) and choose a method for access and recovery.</p>
            </div>
            <div class="card__link">
              Get Started
              <q-icon name="east"/>
            </div>
          </div>
        </div>
        <div class="card card__access">
          <div class="card__left">
            <img class="card__img" src="access.png">
          </div>
          <div class="card__content">
            <div>
              <div class="card__title">
                Access My Wallet
              </div>
              <p class="card__p"> Connect to the blockchain using the wallet of your choice. </p>
              <ul class="card__ul">
                <li class="card__li">Send and Swap ETH & Tokens</li>
                <li class="card__li">Sign & Verify Messages</li>
                <li class="card__li">Interact with Contracts, ENS, Dapps, and more!</li>
              </ul>
            </div>
            <div class="card__link">
              Access Now
              <q-icon name="east"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <about/>
    <faq/>
  </q-page>
</template>

<script lang="ts">
import About from 'components/About.vue'
import FAQ from 'components/FAQ.vue'
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {About, FAQ}
})
export default class PageIndex extends Vue {
};
</script>
<style scoped lang="scss">
.banner {
  padding: 25px 0px 25px 25px;
  &__h1 {
    color: #003945;
    font-size: 45px;
    font-weight: 700;
    line-height: 47px;
    margin-bottom: 8px;
    letter-spacing: -1px;
  }
  &__p {
    color: #506175;
    margin-top: 17px;
    max-width: 420px;
    line-height: 21px;
    margin-bottom: 0!important
  }
}
.grid-2-col{
  grid-column-gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr; 
}
.card{
  top: 0;
  cursor: pointer;
  height: 100%;
  border-radius: 4px;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0;
  padding: 35px 40px;
  position: relative;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  &__create{
    background-color: #5a78f0;
  }
  &__access{
    background-color: #05c0a5;
  }
  &__left{
    padding-right: 35px;
    align-self: center;
  }
  &__content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title{
    font-weight: 500;
    font-size: 25px;
  }
  &__p{
    line-height: 19px;
    padding-top: 15px;
  }
  &__ul {
    padding-inline-start: 15px;
  }
  &__li{
    list-style-type: disc;
    font-size: 12px;
    font-weight: 600;

  }
  &__img{
    width: 87px;
  }
  &__link{
    font-size: 15px;
    font-weight: 500;
  }
}
.card:hover{
  top: -10px;
  -webkit-box-shadow: 0 5px 24px rgb(0 0 0 / 15%);
  box-shadow: 0 5px 24px rgb(0 0 0 / 15%);
}
</style>