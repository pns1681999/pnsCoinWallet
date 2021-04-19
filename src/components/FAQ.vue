<template>
  <div id="FAQ" class="page-container">
    <div class="title">FAQs</div>
    <div class="row q-mb-lg">
      <div>
        Have not found the question that you are looking for? 
      </div>
      <q-space/>
      <div>
        
      </div>
    </div>
    <q-list>
      <q-separator spaced inset class="separator"/>
      <template v-for="item in listFAQ">
        <q-item :key="item.ques" class="faq-item">
          <q-expansion-item
            v-model="item.isExpand"
            header-class="expansion__header"
            :label="item.ques"
            class="full-width expansion"
          >
            <q-card class="bg-grey-1 q-mb-md q-mx-md expansion__card" bordered>
              <q-card-section class="q-pa-lg">
                {{item.ans}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item>

        <q-separator :key="item.ques + 'seq'" spaced inset class="separator"/>
      </template>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FAQ extends Vue {
  listFAQ = [
    {
      ques: 'What is MEW wallet?',
      ans: 'MEW wallet is our official fully-fledged mobile app, bringing Ethereum to your iOS or Android phone.',
      isExpand: false
    },{
      ques: 'Can MEW work with other wallets?',
      ans: 'MEW supports many different wallet types including hardware wallets, such as the Ledger Nano S or Trezor, and third-party wallets like MetaMask. We are also open for anyone to use their Ethereum wallets with the appropriate information. Read more here.',
      isExpand: false
    },{
      ques: 'How can I send a transaction?',
      ans: 'MEW lets anyone with a balance of ETH or ERC20 tokens send a transaction, without additional charges. Using the Ethereum blockchain takes gas, which is paid for in ETH, so we recommend having at least .01 ETH to cover around 2 - 3 transactions. ',
      isExpand: false
    },{
      ques: 'I forgot my password/private key! What can I do?',
      ans: 'MEW does not offer support to recover or reset passwords/private keys. We always suggest writing down private keys and passwords on physical paper/notebooks for safekeeping. Maybe you saved it on your computer! For ideas on what to look for.',
      isExpand: false
    },{
      ques: 'How do I create a new wallet?',
      ans: 'MyEtherWallet (MEW) offers three ways to create a new ETH wallet. These are via MEW wallet, Keystore file, or Mnemonic phrase.',
      isExpand: false
    },
  ]
}
</script>
<style scope lang="scss">
.title{
  font-size: 30px;
  line-height: 42px;
  margin-bottom: 15px;
  font-weight: 500;
}
.separator {
  margin: 0 !important;
}
.faq-item{
  padding: 20px 0px;
}
.expansion{
  &__header{
    &:hover .q-focus-helper{
      opacity: 0  !important;
    }
  }
  &__card{
    border-radius: 5px !important;
  }
}
</style>
<style lang="scss">
.expansion {
  .q-item__label {
    font-size: 18px;
    padding-right: 45px;
    line-height: 27px;
    font-weight: 500;
  }
}
</style>