<template>
  <div>
    <h1>Query 연습입니다.</h1>
    <h2>{{ $router.query.name }}</h2>
    <h2>{{ $router.query.age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'query',
  created() {},

  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
