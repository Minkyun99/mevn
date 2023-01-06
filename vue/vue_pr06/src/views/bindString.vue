<template>
  <div>hello {{ userName }}</div>
  <div>{{ arr }}</div>
  <div>{{ object }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: 'mk',
      arr: [],
      obj: {}
    }
  },
  methods: {}
}
</script>

<style></style>
