<template>
  <div>
    <div class="label">
      Save My Keystore File
    </div>
    <q-card v-for="item in listNote" :key="item.img" class="bg-grey-1 q-mb-sm" flat>
      <q-card-section class="row card">
        <div class="col-3 card__left row">
          <img class="card__left__img" :src="item.img" alt="">
        </div>
        <div class="col-9 card__right">
          <div class="card__right__title">{{item.title}}</div>
          <div class="card__right__content">{{item.content}}</div>
        </div>
      </q-card-section>
    </q-card>
    <div class="text-center">
      <a :href="downloadUrl" ref="aTag" class="hidden"></a>
      <q-btn unelevated no-caps color="primary" @click="handleDownload" label="Download Keystore File" class="download full-width">
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const DownloadProps = Vue.extend({
  props: {
    downloadUrl: {
      type: String,
      default: null,
    }
  }
})

@Component({
  
})
export default class DownloadKeystore extends DownloadProps  {
  filename = Date.now().toString() + '.txt'
  listNote = [
    {
      img: 'note1.svg',
      title: 'Don\'t Lose It',
      content: 'Be careful, it can not be recovered if you lose it.'
    },{
      img: 'note2.svg',
      title: 'Don\'t Share It',
      content: 'Your funds will be stolen if you use this file on a malicious phishing site.'
    },{
      img: 'note3.svg',
      title: 'Make a Backup',
      content: 'Secure it like the millions of dollars it may one day be worth.'
    },
  ]
  handleDownload() {
    const aTag = this.$refs['aTag'] as HTMLAnchorElement
    aTag.download = Date.now().toString() + '.txt'
    aTag.click()
    this.$emit('downloaded')
    // window.URL.revokeObjectURL(this.downloadUrl)
  }
}
</script>
<style scoped lang="scss">
.label{
  margin-bottom: 40px;
  display: block;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}
.card {
  padding: 10px 20px;
  &__left{
    &__img{
      height: 80px;
    }
  } 
  &__right{
    &__title{
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 500;
    }
    &__content{
      color: #506175;
      font-size: 14px;
    }
  }
}
 .download{
  max-width: 300px;
  margin-top: 30px;
  height: 60px;
}
</style>