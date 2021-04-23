<template>
  <q-drawer
    show-if-above
    class="drawer"
    :width="270"
    :breakpoint="500"
  >
      <q-list padding class="menu-list">
        <q-item v-for="item in links" :key="item.icon" :to="item.to" class="link-label" :active="activeLink === item.label" active-class="active-class" clickable v-ripple>
          <q-item-section avatar>
            <img v-if="activeLink === item.label" :src="item.iconActive" alt="">
            <img v-else :src="item.icon" alt="">
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    isScroll: Boolean
  }
})
export default class Drawer extends Vue {
  links = [
    {
      icon: 'icon-dashboard.svg',
      iconActive: 'icon-dashboard-active.svg',
      label: 'Dashboard',
      to: {name: 'dashboard'}
    },
    {
      icon: 'icon-send.svg',
      iconActive: 'icon-send-active.svg',
      label: 'Send',
      to: {name: 'send-transaction'}
    }
  ]
  get activeLink() {
    if (this.$route.path === '/interface/dashboard') {
      return 'Dashboard'
    }
    if (this.$route.path === '/interface/send-transaction') {
      return 'Send'
    }
    else {
      return ''
    }
  }
}
</script>
<style scoped lang="scss">
.link-label{
  color: #999;
  font-size: 16px;
  font-weight: 500;
  position: relative;
}
.active-class{
  color: #334758!important;
}
</style>