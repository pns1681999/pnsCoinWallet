<template>
  <q-header :elevated="isScroll" class="bg-white text-white header">
    <q-toolbar  :class="isScroll ? 'trans page-container toolbar__tiny justify-center' : 'trans page-container toolbar justify-center'">
      <img src="logo.png" :class="isScroll?'trans toolbar__logo__tiny' : ' trans toolbar__logo'"/>
      <q-space/>
      <div class="btn">
        <q-btn :disable="!isScroll" :class="isScroll? 'trans btn__show' : 'trans btn__hide'" color="secondary" no-caps label="New Wallet" outline/>
        <q-btn :disable="!isScroll"  :class="isScroll? 'trans btn__show' : 'trans btn__hide'" color="secondary" unelevated no-caps label="Access" class="q-ml-sm"/>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    isScroll: Boolean
  }
})
export default class Header extends Vue {
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