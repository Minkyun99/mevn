<template>
  <div>
    <button @click="status = !status">image1</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },

  methods: {
    image1: function () {
      if ((this.status = true)) {
      }
    }
  }
}
</script>

<style>
button {
  width: '100px';
  height: '50px';
  border-radius: 20px;
  border: 3px double black;
}
</style>
