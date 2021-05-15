<template>
  <q-dialog persistent :value="show">
    <q-card class="card">
      <img src="successBg.png" class="absolute" alt="">

      <q-card-section class="content row justify-center">
        <div class="done-icon row">
          <q-icon name="close" color="red" class="text-weight-bold" size="90px"></q-icon>
        </div>
        <div class="col-12 text-center title">
          Oops!
        </div>
        <div class="col-12  text-center caption">Something went wrong. Please try again.</div>
        <div class="col-12  text-center">
          <q-btn unelevated no-caps color="primary" @click="$emit('hide')" label="Try again" class="access full-width"/>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    show: {
      type: Boolean
    }
  }
})
export default class FailModal extends Vue  {
}
</script>
<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 530px;
}
.content {
  padding: 40px;
}
.done-icon {
    padding: 25px;
    border: 3px solid #05c0a5;
    border-radius: 200px;
    color: #05c0a5;
    font-size: 90px;
    margin-bottom: 15px;
}
.access{
  max-width: 300px;
  margin-top: 30px;
  height: 60px;
}
.title {
  color: #003945;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.caption {
  color: #506175;
  line-height: 21px;
}
</style>