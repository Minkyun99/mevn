<template>
 <div>
  <h1>안녕하세요.{{ vname }}반갑습니다.{{ age }}살 입니까?</h1>
  <button @click="func('안녕 팝업이야.')">버튼</button>
 </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      vname: '홍길동',
      age : 20
    }
  },
  methods:{
    func : function(text){
      alert(text)
    }
  }
}
</script>

<style>

</style>
