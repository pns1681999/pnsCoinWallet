<template>
  <q-header :elevated="isScroll" class="bg-white text-white header">
    <q-toolbar  :class="isScroll ? 'trans page-container toolbar__tiny justify-center' : 'trans page-container toolbar justify-center'">
      <img src="logo.png" :class="isScroll?'trans toolbar__logo__tiny' : ' trans toolbar__logo'"/>
      <q-space/>
    
      <q-btn color="secondary" no-caps label="New Wallet" outline/>
    
    
      <q-btn color="secondary" unelevated no-caps label="Access" class="q-ml-sm"/>
      
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
</style>