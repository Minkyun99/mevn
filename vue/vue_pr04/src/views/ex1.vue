<template>
  <div>
    <h1>안녕하세요.{{ vname }}반갑습니다.{{ age }}살 입니까?</h1>
    <button @click="func('안녕 팝업이야.')">버튼</button>
    <button @dblclick="func('안녕 또 팝업이야')">더블클릭버튼</button>
    <hr />

    <h1 v-if="status">제가 보이나요?</h1>
    <button v-on:click="status = true">보이게 할게요.</button>
    <button v-on:click="status = false">숨길게요.</button>
    <button v-on:click="status = !status">보숨안보</button>
  </div>
  <hr />

  <h3>v-model 양방향 데이터</h3>
  <input
    type="text"
    v-model="inData"
    v-on:keyup="func(inData + '적고 손뗌.')"
  />
  <input
    type="text"
    v-model="inData"
    v-on:keyup.enter="func(inData + '엔터침.')"
  />
  <h1>{{ inData }}</h1>

  <h3>v-for 사용하기</h3>
  <h4>{{ arrData }}</h4>
  <button v-on:click="add">추가하기</button>
  <button v-on:click="sub">삭제하기</button>
  <ul>
    <li v-for="data in arrData" :key="data">{{ data }}</li>
  </ul>
  <p>추가한 값{{ Anum }}</p>
  <p>삭제한 값{{ Dnum }}</p>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      vname: '홍길동',
      age: 20,
      status: true,
      inData: '',
      arrData: [1, 2, 3, 4, 5],
      Anum: '',
      Dnum: ''
    }
  },

  methods: {
    func: function (text) {
      alert(text)
    },
    add: function () {
      this.arrData.push(this.arrData.length + 1)
      this.Anum = this.arrData.length
      this.Dnum = ''
    },
    sub: function () {
      this.Dnum = this.arrData.pop()
      this.Anum = ''
    }
  }
}
</script>

<style>
ul {
  display: flex;
}
li {
  position: relative;
  margin: 0 30px;
}
li > #text {
  margin-left: -10px;
}
button {
  margin: 0 10px;
}
</style>
