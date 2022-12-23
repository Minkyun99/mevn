<template>
 <div>
  <h1>안녕하세요.{{ vname }}반갑습니다.{{ age }}살 입니까?</h1>
  <button @click="func('안녕 팝업이야.')">버튼</button>
  <button @ablclick="func('안녕 또 팝업이야')">더블클릭버튼</button>
  <hr>
  <h1 v-if="status">제가 보이나요?</h1>
  <button v-on:click="status=true">보이게 할게요.</button>
  <button v-on:click="status=false">숨길게요.</button>
  <button v-on:click="status=!status">보숨안보</button>
  <hr>
  <input type="text" v-model="inData" v-on:keyup="func(inData+'적고 손뗌.')">
  <input type="text" v-model="inData" v-on:keyup.enter="func(inData+'엔터침.')">
  <h2>{{ inData }}</h2>
 </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      vname: '홍길동',
      age : 20,
      status: true,
      inData:''
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
  button{
    margin: 0 10px;
  }
</style>
