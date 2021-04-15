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
              <img src="homepage-3.png" class="top-section__content__right__img">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
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
    }
  }
}
</style>