<template>
  <div>
    <h2>특강 Part3. tfjs 활용</h2>
    <a href="www.tensorflow.org/js">www.tensorflow.org</a>
  </div>
  <hr />
  <h3>외부링크들</h3>
  <ol>
    <li v-for="i of 9" :key="i">
      <a :href="first + i + second">danfo0{{ i }}.html</a>
    </li>
  </ol>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      first: 'http://localhost:8080/danfo0',
      second: '.html'
    }
  },
  methods: {}
}
</script>

<style></style>
