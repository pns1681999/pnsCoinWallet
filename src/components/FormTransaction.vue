<template>
  <q-form
    @submit="onSubmit"
  >
    <div class="label">
      Your Password
    </div>
    <div>
        <q-input
          filled
          v-model="pass"
          :type="isPwd ? 'password' : 'text'"
          placeholder="Please Enter At Least 9 Character"
          lazy-rules
          :rules="[ val => val && val.length > 9 || 'The password field must be at least 9 characters']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
    </div>
    <div class="text-center">
      <q-btn unelevated no-caps type="submit" color="primary" label="Next" class="next full-width">
        <q-icon name="east" class="next__icon"/>
      </q-btn>
    </div>
  </q-form>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import {DeviceMixin} from 'src/mixins'

@Component({
  props: {
    password: {
      type: String,
      default: null,
    }
  },
  model: {
    prop: 'password',
    event: 'submit'
  }
})
export default class FromTransaction extends Mixins(DeviceMixin) {
  pass = '';
  isPwd = true;
  isSubmited = false;
  onSubmit() {
    console.log(this)
    this.$emit('submit', this.pass)
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