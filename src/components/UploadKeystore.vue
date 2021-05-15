<template>
  <div>
    <div class="label">
      Upload your keystore
    </div>
    <q-input filled type="file" @change="loadTextFromFile"/>
    <div class="text-center">
      <q-btn unelevated no-caps @click="$emit('access')" color="primary" label="Access" class="next full-width">
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const file = ev.target.files[0];
      const reader = new FileReader();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      reader.onload = e => this.$emit('load', e.target.result);
      reader.readAsText(file);
    }
  }
};
</script>

<style lang="scss" scope>
.label{
  margin-bottom: 40px;
  display: block;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}  
 .next{
  max-width: 300px;
  margin-top: 30px;
  height: 60px;
  &__icon{
    position: absolute;
    right: 10px;
  }
 }
</style>