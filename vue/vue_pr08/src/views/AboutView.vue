<template>
  <div class="about">
    <div>
      <input type="radio" name="list" value="1" />한국어
      <input type="radio" name="list" value="2" />영어
    </div>
    <textarea
      type="text"
      cols="30"
      rows="10"
      v-model="language"
      @keyup.enter="translator()"
    >
    </textarea>
    <textarea
      disabled
      v-model="translate"
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>
    <input type="submit" @click="translator()" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      language: '',
      translate: '',
      Arr: []
    }
  },

  created() {
    this.$socket.on('trans', (data) => {
      this.translate = data
    })
  },

  methods: {
    translator: function () {
      this.$socket.emit('trans', this.language)
      this.language = ''
    },

    ko: function () {
      this.language = this.only_ko()
    },

    only_ko: function () {
      if (this.language !== [가 - 힣0 - 9]) {
        alert('한글만 입력하세요.')
        this.language = this.language.replace(this.pattern, '')
      }
    }
  }
}
</script>

<style></style>
