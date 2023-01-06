<template>
  <div>html {{ htmlString }}</div>
  <div v-html="htmlStirng"></div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      htmlString: '<p style="color:red">빨간색 글자'
    }
  },
  methods: {}
}
</script>

<style></style>
