<script>
import Header from 'components/Header.vue'
import Drawer from 'components/Drawer.vue'
import Footer from 'components/Footer.vue'
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
    },
    isAuth() {
      return this.$route.path.includes('/interface')
    }
  },
  render() {
    return (
      <q-layout view="hHh lpR fff">
        <Header isScroll={this.isScroll}/>
        {this.isAuth ? <Drawer/> :  ''}
        <q-page-container>
          <router-view />
        </q-page-container>
  
        <Footer/>
        <q-scroll-observer vOn:scroll={(info) => this.scrollInfo = info}/>
      </q-layout>
    )
  }
}
</script>
<style scoped lang="scss">

</style>