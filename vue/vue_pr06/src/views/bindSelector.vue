<template>
  <div>
    <select name="" id="" v-model="selData"></select>
    <option value="" v-for="(data, i) in op" :key="i">{{ data }}</option>
  </div>
  <input type="text" v-on:keyup.enter="write()" v-model="write_info" />
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selData: '고르세요.',
      op: [],
      write_info: ''
    }
  },
  methods: {
    write: function () {
      this.op.push(this.write_info)
    }
  }
}
</script>

<style></style>
