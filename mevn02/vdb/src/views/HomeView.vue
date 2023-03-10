<template>
  <div>
    <h1>Vuejs에서 MongoDB로 CRUD 실습하기</h1>
  </div>
  <h3>MongoDB로 <mark>C</mark>reate 하기</h3>
  <input v-model="title" type="text" />
  날짜 : <input type="date" v-model="date" style="width: 150px" />
  <br />
  <input type="text" v-model="content" style="width: 400px" />
  <button @click="dbc()">전송</button>
  <h4>{{ data }}</h4>
  <hr />
  <h3>MongoDB로 <mark>R</mark>ead 하기</h3>
  날짜 : <input type="date" v-model="date2" style="width: 150px" />
  <br />
  <button @click="dbr()">읽어오기</button>
  <h4>{{ data2 }}</h4>
  <hr />
  <h3>MongoDB로 <mark>U</mark>pdate 하기</h3>
  제목 : <input v-model="title3" type="text" /> 날짜 :
  <input type="date" v-model="date3" style="width: 150px" />
  <br />
  내용 : <input type="text" v-model="content3" style="width: 400px" />
  <button @click="dbu()">1개 수정</button>
  <h4>{{ data3 }}</h4>
  <hr />
  <h3>MongoDB로 <mark>d</mark>elete 하기</h3>
  <hr />
  날짜 : <input type="date" v-model="date4" style="width: 150px" />
  <br />
  <button @click="dbd()">삭제하기</button>
  <h4>{{ data4 }}</h4>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      data: '',
      data2: '',
      data3: '',
      data4: '',
      title: '',
      title3: '',
      content: '',
      content3: '',
      date: new Date().toISOString().substring(0, 10),
      date2: new Date().toISOString().substring(0, 10),
      date3: new Date().toISOString().substring(0, 10),
      date4: new Date().toISOString().substring(0, 10)
    }
  },
  methods: {
    dbc: function () {
      this.data = 'saving the data on DB...'
      axios
        .post('/dbc', {
          title: this.title,
          content: this.content,
          date: this.date
        })
        .then((res) => (this.data = res.data))
    },
    dbr: function () {
      this.data2 = 'saving the data on DB...'
      axios.get('/dbr/' + this.date2).then((res) => (this.data2 = res.data))
    },
    dbu: function () {
      this.data = 'saving the data on DB...'
      axios
        .post('/dbc', {
          title: this.title3,
          content: this.content3,
          date: this.date3
        })
        .then((res) => (this.data3 = res.data))
    },
    dbㅇ: function () {
      this.data2 = 'deleting the data on DB...'
      axios.get('/dbr/' + this.date4).then((res) => (this.data4 = res.data))
    }
  }
}
</script>

<style></style>
