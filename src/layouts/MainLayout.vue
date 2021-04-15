<script>
export default {
  data() {
    return {
      title: 'PNS Wallet',
      scrollInfo: {position: 0}
    }
  },
  computed: {
    isScroll() {
      return this.scrollInfo.position > 100;
    }
  },
  render() {
    return (
      <q-layout view="hHh LpR fff">
        <q-header elevated={this.isScroll} class="bg-white text-white header">
          <q-toolbar  class={this.isScroll ? "trans page-container toolbar__tiny justify-center" : "trans page-container toolbar justify-center"}>
            <img src="logo.png" class={this.isScroll?"trans toolbar__logo__tiny" : " trans toolbar__logo"}/>
            <q-space/>
          
            <q-btn color="secondary" no-caps label="New Wallet" outline/>
          
          
            <q-btn color="secondary" unelevated no-caps label="Access" class="q-ml-sm"/>
            
          </q-toolbar>
        </q-header>
  
        <q-page-container>
          <router-view />
        </q-page-container>
  
        <q-footer class="bg-grey-8 text-white page-container">
        </q-footer>
        <q-scroll-observer vOn:scroll={(info) => this.scrollInfo = info}/>
      </q-layout>
    )
  }
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