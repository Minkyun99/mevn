<template>
  <h1>원하는 구구단을 입력해주세요.</h1>
  <input type="text" v-model="value" v-on:keyup="gugudan(value)">
  <h1>{{ value }}</h1>
</template>

<script>
  export default {
    gugudan(){
      return{
        value : '',
      }
    },
  
  methods:{
    gugudan(text){
      Number(text)
    }
  }

}
</script>

<style>

</style>
