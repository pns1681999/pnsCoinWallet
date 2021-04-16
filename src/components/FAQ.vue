<template>
  <div class="wrap">
    <div class="top-section">
      <div class="top-section__circle">
        <img class="top-section__circle__img" src="circle.png" alt="">
      </div>
      <div class="top-section__about" style="background-image: url(star-background.svg);">
        <div class="page-container">
          <div class="top-section__content row content-center">
            <div class="top-section__content__left col">
              <div class="top-section__content__left__title">About MEW</div>
              <p class="top-section__content__left__p">MyEtherWallet - please, call us MEW - puts the Ethereum blockchain at your fingertips. We are a team of crypto-enthusiasts dedicated to bring you the most secure, most intuitive, and dare we say prettiest way to manage your ETH and ERC20 tokens. We're always here to help, and we're never giving away ETH. Cheers!</p>
            </div>
            <div class="top-section__content__right col">
              <img src="wSun.png" class="top-section__content__right__img">
              <div class="top-section__content__right__spaceman">
                <img class="top-section__content__right__spaceman__img" src="spaceman.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="page-container">
        <div class="row q-col-gutter-xl">
          <div v-for="item in about" :key="item.title" class="col-6 row">
            <div class="col-3 row self-center">
              <img :src="item.img" class="bottom-section__img">
            </div>
            <div class="col-9 bottom-section__content self-center">
              <div class="bottom-section__content__title">{{item.title}}</div>
              <p class="bottom-section__content__p">{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  about = [
    {
      img: 'about-1.svg',
      title: 'Join MEW',
      description: 'Access the Ethereum blockchain original and most-trusted wallet client, now with a host of new features all contained in an elegant, easy-to-use interface.'
    },{
      img: 'about-2.svg',
      title: 'Hardware Wallet Support',
      description: 'MEW offers support for all major hardware wallets including Ledger, Trezor, and many more.'
    },{
      img: 'about-3.svg',
      title: 'Swap',
      description: 'MEW has partnered with Bity, Kyber Network, Changelly, and Simplex to allow users to swap fiat to crypto, ETH and BTC, ETH and ERC20.'
    },{
      img: 'about-4.svg',
      title: 'MEW Wallet',
      description: 'MEW\'s official fully-fledged app brings Ethereum to your iOS or Android smartphone. MEW wallet puts you in full control.'
    },

  ]
}
</script>
<style scoped lang="scss">
.top-section{
  background-color: #0b2840;
  &__circle{
    &__img{
      width: 100%;
    }
  }
  &__about{
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 55%;
  }
  &__content{
    color: #FFFFFF;
    &__left{
      align-self: center;
      &__title{
        font-weight: 500;
        font-size: 30px;
        line-height: 42px;
        margin-bottom: 15px;
      }
      &__p{
        width: 380px;
      }
    }
    &__right{
      position: relative;
      height: 515px;
      &__img{
        height: 300px;
        position: absolute;
        right: 0;
        top: 0;
      }
      &__spaceman{
        right: 300px;
        bottom: 34px;
        position: absolute;
        &__img{
          height: 200px;
          animation-name: spaceman-fly;
          animation-duration: 20s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
  @keyframes spaceman-fly {
    0% {
      transform:rotate(0deg) scale(1.4) translate(0);
    }
    25% {
      transform:rotate(15deg) scale(.8) translate(100px,-170px);
    } 
    50% {
      transform:rotate(-10deg) scale(.6) translate(170px,-160px);
    }
    to {
      transform:rotate(0deg) scale(1.4) translate(0);
    }
  }
}
.bottom-section{
  padding: 85px 0;
  background-color: #f9f9f9;
    &__img{
      width: 80px;
      height: 80px;
    }
    &__content{
      color: #212529;
      &__title{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      &__p{
        max-width: 300px;
      }
    }
  }
</style>