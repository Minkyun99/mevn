<template>
  <div id="container">
    <div id="chatid1">
      <span
        >대화명
        <input
          id="chatidi"
          @input="myname = $event.target.value"
          placeholder="대화명을 입력하세요."
        />
        <input type="button" value="확인" @click="makeName()" />
      </span>
      <span v-if="myname !== '익명'">대화명 : {{ myname }}</span>
    </div>
    <div id="messages">
      <div class="chat-line" v-for="(chat, i) in chatData" :key="i">
        {{ chat }}
      </div>
    </div>

    <div id="chatid2">
      귓속말:
      <input type="checkbox" @click="ck = $event.target.checked" />
      <input :disabled="ck" v-model="toname" placeholder="상대이름" />에게
    </div>

    <div id="send">
      <input
        type="text"
        id="input"
        v-model="message"
        autocomplete="off"
        @keyup.enter="sendMesssage()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      chatData: [],
      myname: '익명',
      chat: '',
      ck: '',
      toname: '',
      message: ''
    }
  },

  methods: {
    makeName: function () {
      console.log('나중에 씀')
    },

    sendMesssage: function () {
      console.log(this.message)
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  min-height: 500px;
  margin: 0;
  padding-bottom: 3em;
}

#container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#messages {
  height: 450px;
  background: #f1eaea;
  text-align: left;
  overflow-y: scroll;
}

#send {
  margin: 5px;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}

#chatid1 {
  text-align: right;
  display: flex;
  justify-content: space-between;
}

#chatid2 {
  text-align: right;
  margin-right: 5px;
}

#input {
  height: 100%;
  width: 60%;
  border: none;
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 32px;
  margin: 0;
  border-bottom: 1px solid #564949;
}

button {
  margin: 0;
  width: 25%;
  height: 100%;
  background: #333;
  border: none;
  padding: 0.1em;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
</style>
