<template>
  <p>양방향 입출력 예제</p>
  <input type="text" v-model="userId" :placeholder="sample" />

  <p>계산기 예제</p>
  <input type="text" v-model="num1" />+<input type="text" v-model="num2" />
  <span>{{ num1 + num2 }}</span>

  <p>계산기 예제2</p>
  <input type="text" v-model.number="num3" /> +
  <input type="text" v-model.number="num4" />
  <span>{{ num3 + num4 }}</span>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userId: ''
    }
  },
  methods: {}
}
</script>

<style></style>
