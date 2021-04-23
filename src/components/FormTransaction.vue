<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
  >
    <div class="row q-col-gutter-sm">
      <div class="col-5">
        <div class="input__label">
          Type
        </div>
        <q-input filled value="PNS Coin" disable/>
      </div>
      <div class="col-7">
        <div class="input__label">
          Amount
        </div>
        <q-input filled type="number"  v-model="amount"/>
      </div>
    </div>
    <div class="q-mt-xl">
      <div class="input__label">
        To Address
      </div>
      <q-input filled clearable v-model="toAddress" />
    </div>
    <div class="text-center">
      <q-btn unelevated no-caps type="submit" color="primary" label="Send Transaction" class="btn full-width"/>
    </div>
    <div class="text-center">
      <q-btn class="text-center q-mt-md" color="primary" flat no-caps type="reset">Clear all</q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import {DeviceMixin} from 'src/mixins'

@Component({})
export default class FormTransaction extends Mixins(DeviceMixin) {
  amount = null;
  toAddress = '';
  isSubmited = false;
  onSubmit() {
    console.log(this)
    this.$emit('submit', this.amount)
  }
  onReset() {
    this.amount = null;
    this.toAddress = '';
  }
}
</script>
<style scoped lang="scss">
 .btn{
  max-width: 300px;
  margin-top: 30px;
  height: 60px;
}
.input{
  &__label{
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    margin-bottom: 15px;
  }
}
</style>